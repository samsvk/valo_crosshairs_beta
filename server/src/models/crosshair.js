import mongoose from "mongoose";

const crosshairSchema = mongoose.Schema({
  title: String,
  name: String,
  creator: String,
  tags: [String],
  link: String,
  import: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Crosshair", crosshairSchema);
