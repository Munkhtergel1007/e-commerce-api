const express = require("express");
const { createCategory, getCategories } = require("../controller/category");
const { createProduct, getProducts } = require("../controller/product");

const router = express.Router();

router.route("/category").get(getCategories);
router.route("/category").post(createCategory);

router.route("/product").post(getProducts);
router.route("/addProduct").post(createProduct);

module.exports = router;
