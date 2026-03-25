import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId:String,
  name:String,
  qty:Number,
  price:Number,
  mode:String,
  date:{ type:Date, default:Date.now }
});

export default mongoose.model("Order", schema);