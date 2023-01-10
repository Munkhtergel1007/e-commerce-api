const express = require("express");
const { createCategory, getCategories } = require("../controller/category");
const { getDeparments, createDepartment } = require("../controller/department");
const {
  createProduct,
  getProducts,
  getOneProducts,
} = require("../controller/product");

const router = express.Router();

router.route("/category").get(getCategories);
router.route("/category").post(createCategory);

router.route("/product").post(getProducts);
router.route("/addProduct").post(createProduct);
router.route("/getOneProduct").post(getOneProducts);

router.route("/department").get(getDeparments);
router.route("/department").post(createDepartment);

module.exports = router;
