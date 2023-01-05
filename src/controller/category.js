const Category = require("../model/Category");
const MyError = require("../utils/myError");

// GET ALL CATEGORIES
module.exports.getCategories = async (req, res, next) => {
  try {
    const existCategories = await Category.find({
      parentCategory: null,
    }).populate({
      path: "childrenCategories",
    });

    res.status(200).json({
      success: true,
      data: existCategories,
    });
  } catch (err) {
    next(err);
  }
};

// GET BY ID CATEGORY
module.exports.getOneCategory = async (req, res, next) => {
  try {
    const existCategory = await Category.findById(req.params.id);

    if (!existCategory) {
      throw new MyError("Not exist", 400);
    }

    res.status(200).json({
      success: true,
      data: existCategory,
    });
  } catch (err) {
    next(err);
  }
};

// CREATE
module.exports.createCategory = async (req, res, next) => {
  const category = req.body;
  try {
    const existParentCategory = await Category.findById(category.parentId);
    if (category.parentId) {
      if (!existParentCategory) throw Error(`Цэс ${errorMsg.notfound}`);
    }

    const newCategory = await Category.create(
      Object.assign(category, {
        parentCategory: existParentCategory,
      })
    );

    if (existParentCategory) {
      await existParentCategory.childrenCategories.push(newCategory);
      await existParentCategory.save();
      return res.status(200).json({
        success: true,
        data: category,
      });
    }
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.updateCategory = async (req, res, next) => {
  try {
    const existCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      success: true,
      data: existCategory,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteCategory = async (req, res, next) => {
  try {
    const existCategory = await Category.findByIdAndDelete(req.params.id);

    if (!existCategory) {
      res.status(200).json({
        success: false,
        data: req.params.id + " not exist!!!",
      });
    }

    res.status(200).json({
      success: true,
      data: existCategory,
    });
  } catch (err) {
    next(err);
  }
};
