import mongoose from "mongoose";

const { Schema } = mongoose;

const winnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    seconds: Number,
  },
  { timestamps: true }
);

export default mongoose.models.Winner || mongoose.model("Winner", winnerSchema);
