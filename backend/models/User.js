import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  balance:{ type:Number, default:10000 }
});

export default mongoose.model("User", schema);