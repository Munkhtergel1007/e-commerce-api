const Product = require("../model/Product");
// const jwt = require("jsonwebtoken");

module.exports.getProducts = async (req, res, next) => {
  let query = {};
  if (req.body.categoryOptions.length !== 0) {
    query = {
      category: { $in: req.body.categoryOptions },
    };
  }
  if (req.body.departmentOptions) {
    query = {
      department: req.body.departmentOptions,
    };
  }
  if (req.body.departmentOptions && req.body.categoryOptions.length !== 0) {
    query = {
      department: req.body.departmentOptions,
      category: { $in: req.body.categoryOptions },
    };
  }
  let sortQuery = {};
  if (req.body.type !== 0) {
    sortQuery = { price: req.body.type };
  }

  // var queryWish = { user: null };
  // if (req.cookies.token) {
  // 	const token = req.cookies.token;
  // 	const tokenobj = jwt.verify(token, process.env.JWT_SECRET);
  // 	queryWish = { user: tokenobj.id };
  // }

  try {
    const existProducts = await Product.find(query).sort(sortQuery);
    // const existWishes = await WishList.find(queryWish);
    // let tempData = existProducts;
    // tempData?.forEach((product) => {
    // 	existWishes?.forEach((wish) => {
    // 		console.log(product._id, wish.product._id);
    // 		if (product?._id.toString() === wish?.product?._id.toString())
    // 			product.checked = true;
    // 	});
    // });
    res.status(200).json({
      success: true,
      data: existProducts,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.createProduct = async (req, res, next) => {
  const product = req.body.data;
  console.log(product);
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

module.exports.getOneProducts = async (req, res, next) => {
  let query = req.body;
  try {
    const existData = await Product.findOne(query)
      .populate("category")
      .populate("department");
    res.status(200).json({
      success: true,
      data: existData,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getAllProducts = async (req, res, next) => {
  try {
    const existData = await Product.find();
    res.status(200).json({
      success: true,
      data: existData,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.updateProduct = async (req, res, next) => {
  try {
    const existData = await Product.findOneAndUpdate(
      { _id: req.body._id },
      {
        color: req.body.data.color,
        description: req.body.data.description,
        img: req.body.data.img,
        material: req.body.data.material,
        title: req.body.data.name,
        size: req.body.data.size,
        category: req.body.data.category,
        price: req.body.data.price,
        department: req.body.data.department,
      }
    );
    res.status(200).json({
      success: true,
      data: existData,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteProduct = async (req, res, next) => {
  console.log(req.body._id);
  try {
    const existData = await Product.findOneAndDelete({ _id: req.body._id });
    res.status(200).json({
      success: true,
      data: existData,
    });
  } catch (err) {
    next(err);
  }
};
