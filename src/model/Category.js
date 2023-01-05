const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter category name!"],
  },
  description: {
    type: String,
    required: [true, "Please enter category description"],
    maxLength: [500, "Max length 500"],
  },
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  avarageRating: {
    type: Number,
    min: [1, "Minimum rating 1"],
    max: [10, "Maximum rating  10"],
  },
  avaragePrice: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  childrenCategories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

module.exports = mongoose.model("Category", CategorySchema);
