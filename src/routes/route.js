const express = require("express");
const { createCategory, getCategories } = require("../controller/category");
const { getDeparments, createDepartment } = require("../controller/department");
const { logOut } = require("../controller/logOut");
const {
	createProduct,
	getProducts,
	getOneProducts,
} = require("../controller/product");
const {
	register,
	login,
	checkAuth,
	getOneUser,
} = require("../controller/user");
const {
	createWishList,
	deleteWishList,
	getWishList,
} = require("../controller/wishList");
const { protect } = require("../middleware/protect");

const router = express.Router();

router.route("/category").get(getCategories);
router.route("/category").post(createCategory);

router.route("/product").post(getProducts);
router.route("/addProduct").post(protect, createProduct);
router.route("/getOneProduct").post(getOneProducts);

router.route("/department").get(getDeparments);
router.route("/department").post(createDepartment);

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/getOneUser").post(protect, getOneUser);
router.route("/checkAuth").post(checkAuth);

router.route("/getWishList").post(protect, getWishList);
router.route("/createWishList").post(protect, createWishList);
router.route("/deleteWishList").post(protect, deleteWishList);

module.exports = router;
