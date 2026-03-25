import express from "express";
import { getStocks } from "../services/stockService.js";

const router = express.Router();

router.get("/", (req,res)=>{
  res.json(getStocks());
});

export default router;