import mongoose from "mongoose";

const productschema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});

const productmodel =
  mongoose.models.Test || mongoose.model("Test", productschema);
export default productmodel;
