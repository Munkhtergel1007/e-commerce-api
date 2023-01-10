const WishList = require("../model/WishList");

module.exports.getWishList = async (req, res, next) => {
	let query = req.body;
	console.log(req.body);
	try {
		const wishLists = await WishList.find(query)
			.populate("product")
			.populate("user");
		res.status(200).json({
			success: true,
			data: wishLists,
		});
	} catch (err) {
		next(err);
	}
};

module.exports.createWishList = async (req, res, next) => {
	const wishList = req.body;
	try {
		const newWishList = await WishList.create(wishList);
		res.status(200).json({
			success: true,
			data: newWishList,
		});
	} catch (err) {
		next(err);
	}
};

module.exports.deleteWishList = async (req, res, next) => {
	let query = req.body;
	try {
		const deletedWishList = await WishList.findOneAndDelete(query);
		res.status(200).json({
			success: true,
			data: deletedWishList,
		});
	} catch (err) {
		next(err);
	}
};
