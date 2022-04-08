import mongoose from "mongoose";

const crosshairSchema = mongoose.Schema({
  title: String,
  link: String,
  import: String,
  color: String,
});

export default mongoose.model("Crosshair", crosshairSchema);
