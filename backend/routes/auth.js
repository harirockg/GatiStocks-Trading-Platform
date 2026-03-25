import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/signup", async(req,res)=>{
  const user = await User.create(req.body);
  res.json(user);
});

router.post("/login", async(req,res)=>{
  const {email,password} = req.body;

  const user = await User.findOne({email});

  if(!user) return res.status(400).json({msg:"User not found"});
  if(user.password !== password)
    return res.status(400).json({msg:"Wrong password"});

  res.json(user);
});

// balance API
router.get("/user/:id", async(req,res)=>{
  const user = await User.findById(req.params.id);
  res.json(user);
});

export default router;