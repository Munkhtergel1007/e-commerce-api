const Product = require("../model/Product");

module.exports.getProducts = async (req, res, next) => {
  let query = {};
  if (req.body.categories.length !== 0) {
    query = { category: { $in: req.body.categories } };
  }
  try {
    const existProducts = await Product.find(query);
    res.status(200).json({
      success: true,
      data: existProducts,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.createProduct = async (req, res, next) => {
  const product = req.body;
  try {
    const newProduct = await Product.create(product);
    res.status(200).json({
      success: true,
      data: newProduct,
    });
  } catch (err) {
    next(err);
  }
};
