import mongoose from "mongoose";

const { Schema } = mongoose;

const charSchema = new Schema({
  name: String,
  x: Number,
  y: Number,
});

export default mongoose.models.Char || mongoose.model("Char", charSchema);
