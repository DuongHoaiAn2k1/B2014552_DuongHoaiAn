const express = require("express");
const product = require("../controllers/product.controller");
const router = express.Router();
const multer = require("multer");

// Cấu hình Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Nơi lưu trữ tệp tải lên
  },
  filename: function (req, file, cb) {
    // Đặt tên tệp dựa trên thời gian
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
router
  .route("/")
  .get(product.findAll)
  // .post(upload.single("productImg"), product.create);
  .post(upload.array("productImg"), product.create);

router
  .route("/:id")
  .get(product.findOne)
  .patch(upload.array("productImg"), product.update)
  .delete(product.delete);

module.exports = router;
