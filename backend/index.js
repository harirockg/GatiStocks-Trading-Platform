import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import tradeRoutes from "./routes/trade.js";
import stockRoutes from "./routes/stock.js";
import { updatePrices } from "./services/stockService.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB Connected"));

app.use("/auth", authRoutes);
app.use("/trade", tradeRoutes);
app.use("/stocks", stockRoutes);

// price update engine
setInterval(()=>{
  updatePrices();
},1000);

app.listen(3002, ()=>console.log("Server running on 3002"));