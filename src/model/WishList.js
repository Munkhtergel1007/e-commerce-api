const mongoose = require("mongoose");

const WishListSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("WishList", WishListSchema);
