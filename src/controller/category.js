const Category = require("../model/Category");

// GET ALL CATEGORIES
module.exports.getCategories = async (req, res, next) => {
	try {
		const existCategories = await Category.find();
		res.status(200).json({
			success: true,
			data: existCategories,
		});
	} catch (err) {
		next(err);
	}
};

// CREATE
module.exports.createCategory = async (req, res, next) => {
	const category = req.body;
	try {
		const newCategory = await Category.create(category);

		res.status(200).json({
			success: true,
			data: newCategory,
		});
	} catch (err) {
		next(err);
	}
};

module.exports.getOneCategory = async (req, res, next) => {
	let query = req.body;
	try {
		const existData = await Category.findOne(query);
		res.status(200).json({
			success: true,
			data: existData,
		});
	} catch (err) {
		next(err);
	}
};

module.exports.updateCategory = async (req, res, next) => {
	try {
		const existData = await Category.findOneAndUpdate(
			{ _id: req.body._id },
			{ name: req.body.name }
		);
		res.status(200).json({
			success: true,
			data: existData,
		});
	} catch (err) {
		next(err);
	}
};

module.exports.deleteCategory = async (req, res, next) => {
	try {
		const existData = await Category.findOneAndDelete({ _id: req.body._id });
		res.status(200).json({
			success: true,
			data: existData,
		});
	} catch (err) {
		next(err);
	}
};
