const express = require("express");
const { createCategory, getCategories } = require("../controller/category");
const { createProduct, getProducts } = require("../controller/product");
const { register, login, checkAuth } = require("../controller/user");
const { protect } = require("../middleware/protect");

const router = express.Router();

router.route("/category").get(getCategories);
router.route("/category").post(protect, createCategory);

router.route("/product").post(getProducts);
router.route("/addProduct").post(protect, createProduct);

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/checkAuth").post(checkAuth);

module.exports = router;
