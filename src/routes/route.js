const express = require("express");
const { createCategory, getCategories } = require("../controller/category");
const { getDeparments, createDepartment } = require("../controller/department");
const {
  createProduct,
  getProducts,
  getOneProducts,
} = require("../controller/product");
const { register, login, checkAuth } = require("../controller/user");
const { protect } = require("../middleware/protect");

const router = express.Router();

router.route("/category").get(getCategories);
router.route("/category").post(createCategory);

router.route("/product").post(getProducts);
router.route("/addProduct").post(createProduct);
router.route("/getOneProduct").post(getOneProducts);

router.route("/department").get(getDeparments);
router.route("/department").post(createDepartment);

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/checkAuth").post(checkAuth);

module.exports = router;
