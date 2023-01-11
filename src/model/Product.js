const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter product title!"],
    uniquie: true,
    trim: true,
    maxLength: [50, "Max length 50"],
  },
  img: {
    type: String,
    default: "no-photo.jpg",
  },
  price: {
    type: Number,
    required: [true, "Please enter price"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
  },
  color: { type: String },
  material: { type: String },
});

module.exports = mongoose.model("Product", ProductSchema);
