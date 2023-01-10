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
