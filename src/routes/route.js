const express = require("express");
const {
  createCategory,
  getCategories,
  getOneCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/category");
const {
  getDeparments,
  createDepartment,
  getOneDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controller/department");
const {
  createProduct,
  getProducts,
  getOneProducts,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/product");
const {
  register,
  login,
  checkAuth,
  getOneUser,
  getAllUsers,
} = require("../controller/user");
const {
  createWishList,
  deleteWishList,
  getWishList,
} = require("../controller/wishList");
const { protect } = require("../middleware/protect");

const router = express.Router();

router.route("/category").get(getCategories);
router.route("/category").post(protect, createCategory);
router.route("/getOneCategory").post(getOneCategory);
router.route("/updateCategory").post(protect, updateCategory);
router.route("/deleteCategory").post(protect, deleteCategory);

router.route("/product").post(getProducts);
router.route("/getAllProducts").get(protect, getAllProducts);
router.route("/addProduct").post(protect, createProduct);
router.route("/getOneProduct").post(getOneProducts);
router.route("/updateProduct").post(protect, updateProduct);
router.route("/deleteProduct").post(protect, deleteProduct);

router.route("/department").get(getDeparments);
router.route("/department").post(createDepartment);
router.route("/getOneDepartment").post(getOneDepartment);
router.route("/updateDepartment").post(protect, updateDepartment);
router.route("/deleteDepartment").post(protect, deleteDepartment);

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/getOneUser").post(protect, getOneUser);
router.route("/getAllUsers").get(protect, getAllUsers);
router.route("/checkAuth").post(checkAuth);

router.route("/getWishList").post(protect, getWishList);
router.route("/createWishList").post(protect, createWishList);
router.route("/deleteWishList").post(protect, deleteWishList);

module.exports = router;
