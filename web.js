const express = require("express");
const {
  getHomepage,
  getEditPage,
  postCreateUser,
  updateProduct,
  deleteProduct,
  getCreatePage,
} = require("../controllers/Homecontroller");
const router = express.Router();

//router.Method("/route", handler)

//khai báo route
router.get("/", getHomepage);
router.get("/create", getCreatePage);
router.post("/update-user", updateProduct);
router.post("/create-user", postCreateUser);
router.get("/editproduct/:masanpham", getEditPage);
router.post("/delete-product", deleteProduct);
module.exports = router; //export default
