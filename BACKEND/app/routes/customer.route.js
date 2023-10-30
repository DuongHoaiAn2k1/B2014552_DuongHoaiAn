const express = require("express");
const customers = require("../controllers/customer.controller");

const router = express.Router();

router.route("/signUp").post(customers.signUp);

router.route("/signIn").post(customers.signIn);

router.route("/signOut").post(customers.signOut);

router.route("/profile").get(customers.getProfile);
router.route("/").get((req, res) => {
  res.json("Chao mung den voi trang customer");
});

module.exports = router;
