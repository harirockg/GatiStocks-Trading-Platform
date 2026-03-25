import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import StockChart from "./StockChart";

function BuySellModal({ stock, close }) {

  const [qty, setQty] = useState(1);
  const [priceData, setPriceData] = useState([]);

  const userId = localStorage.getItem("userId");

  // REAL-TIME PRICE
  useEffect(() => {

    let current = stock.price || 100;

    const interval = setInterval(() => {

      const change = (Math.random() - 0.5) * 5;
      current = Math.max(1, current + change);

      setPriceData(prev => {
        const updated = [...prev, current];
        if (updated.length > 15) updated.shift();
        return updated;
      });

    }, 1000);

    return () => clearInterval(interval);

  }, [stock]);

  //  BUY
  const buy = async () => {
    try {

      // IMPORTANT: current price s
      const currentPrice =
        priceData.length > 0
          ? priceData[priceData.length - 1]
          : stock.price;

      await axios.post("https://gatistocks-backend.onrender.com/trade/buy", {
        userId,
        name: stock.name,
        qty: Number(qty),
        price: currentPrice   
      });

      toast.success("Buy Successful ✅");
      close();

    } catch {
      toast.error("Buy Failed ❌");
    }
  };

  // SELL
  const sell = async () => {
    try {

      const currentPrice =
        priceData.length > 0
          ? priceData[priceData.length - 1]
          : stock.price;

      await axios.post("https://gatistocks-backend.onrender.com/trade/sell", {
        userId,
        name: stock.name,
        qty: Number(qty),
        price: currentPrice
      });

      toast.success("Sell Successful ✅");
      close();

    } catch {
      toast.error("Sell Failed ❌");
    }
  };

  return (
    <div style={{
      position: "fixed",
      top: "20%",
      left: "25%",
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
      display: "flex",
      gap: "25px",
      zIndex: 1000
    }}>

      {/* LEFT */}
      <div style={{ width: "220px" }}>

        <h3>{stock.name}</h3>

        <p style={{ marginBottom: "10px", color: "#555" }}>
          Price: ₹{(priceData.at(-1) || stock.price).toFixed(2)}
        </p>

        <input
          type="number"
          value={qty}
          min="1"
          onChange={(e) => setQty(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "15px"
          }}
        />

        <div style={{ display: "flex", gap: "10px" }}>

          <button
            onClick={buy}
            style={{
              background: "green",
              color: "#fff",
              padding: "8px",
              border: "none",
              borderRadius: "6px",
              width: "100%"
            }}
          >
            Buy
          </button>

          <button
            onClick={sell}
            style={{
              background: "red",
              color: "#fff",
              padding: "8px",
              border: "none",
              borderRadius: "6px",
              width: "100%"
            }}
          >
            Sell
          </button>

        </div>

        <br />

        <button
          onClick={close}
          style={{
            width: "100%",
            padding: "8px",
            background: "#ccc",
            border: "none",
            borderRadius: "6px"
          }}
        >
          Cancel
        </button>

      </div>

      {/* RIGHT */}
      <div style={{ width: "350px" }}>
        <h4>Live Chart</h4>
        <StockChart data={priceData} />
      </div>

    </div>
  );
}

export default BuySellModal;