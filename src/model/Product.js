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
    type: String,
    required: [true, "Please enter price"],
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
