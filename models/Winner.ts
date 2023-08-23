import mongoose from "mongoose";

const { Schema } = mongoose;

const winnerSchema = new mongoose.Schema({
  name: String,
});

export default mongoose.models.Winner || mongoose.model("Winner", winnerSchema);
