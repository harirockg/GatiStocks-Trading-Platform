import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId:String,
  name:String,
  qty:Number,
  price:Number
});

export default mongoose.model("Holding", schema);