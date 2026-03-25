import express from "express";
import User from "../models/User.js";
import Holding from "../models/Holding.js";
import Order from "../models/Order.js";
import { getPrice } from "../services/stockService.js";

const router = express.Router();


// ================= BUY =================
router.post("/buy", async (req, res) => {
  try {
    const { userId, name, qty } = req.body;

    const price = await getPrice(name);
    const user = await User.findById(userId);

    if (!user) return res.status(400).json({ msg: "User not found" });

    const cost = price * qty;

    if (user.balance < cost)
      return res.status(400).json({ msg: "Low balance" });

    user.balance -= cost;
    await user.save();

    let holding = await Holding.findOne({ userId, name });

    if (holding) {
      const totalQty = holding.qty + qty;

      holding.price =
        (holding.price * holding.qty + price * qty) / totalQty;

      holding.qty = totalQty;

      await holding.save();
    } else {
      await Holding.create({ userId, name, qty, price });
    }

    await Order.create({ userId, name, qty, price, mode: "BUY" });

    res.json({ msg: "Buy success" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
});


// ================= SELL =================
router.post("/sell", async (req, res) => {
  try {
    const { userId, name, qty } = req.body;

    const price = await getPrice(name);
    const user = await User.findById(userId);
    const holding = await Holding.findOne({ userId, name });

    if (!user) return res.status(400).json({ msg: "User not found" });

    if (!holding || holding.qty < qty)
      return res.status(400).json({ msg: "Not enough stock" });

    user.balance += price * qty;
    await user.save();

    holding.qty -= qty;

    if (holding.qty === 0) {
      await Holding.deleteOne({ _id: holding._id });
    } else {
      await holding.save();
    }

    await Order.create({ userId, name, qty, price, mode: "SELL" });

    res.json({ msg: "Sell success" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
});


// ================= HOLDINGS (🔥 FIXED) =================
router.get("/holdings/:userId", async (req, res) => {
  try {
    const holdings = await Holding.find({
      userId: req.params.userId
    });

    const result = holdings.map(h => {

      const buyPrice = Number(h.price || 0);
      const qty = Number(h.qty || 0);

      const currentPrice = Number(getPrice(h.name) || buyPrice);

      const pnl = (currentPrice - buyPrice) * qty;

      return {
        name: h.name,
        qty,
        buyPrice,
        currentPrice,
        pnl
      };
    });

    res.json(result);

  } catch (err) {
    console.log(err);
    res.json([]);
  }
});


// ================= ORDERS =================
router.get("/orders/:userId", async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.params.userId
    })
      .sort({ date: -1 })
      .limit(20);

    res.json(orders);

  } catch (err) {
    console.log(err);
    res.json([]);
  }
});

export default router;