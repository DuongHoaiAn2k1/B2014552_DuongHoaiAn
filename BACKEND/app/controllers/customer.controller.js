const Customer = require("../models/Customer.model");
const APIError = require("../api-error");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const jwtSecret = "mysecretkey";
var cookieParser = require("cookie-parser");
const { query } = require("express");
exports.signUp = async (req, res, next) => {
  try {
    // Định nghĩa schema validation cho dữ liệu đầu vào
    const schema = Joi.object({
      name: Joi.string().max(255).required(),
      age: Joi.number().integer().min(0),
      phone: Joi.string().max(20),
      address: Joi.string().max(200),
      email: Joi.string().email().max(100).required(),
      password: Joi.string()
        .min(6)
        .pattern(new RegExp("^(?=.*[a-zA-Z]).+$"))
        .required(),
    });

    // Validate dữ liệu đầu vào với schema
    const { error } = schema.validate(req.body);

    if (error) {
      // Nếu có lỗi validation, trả về lỗi cho client
      return res.status(400).json({
        error: "Dữ liệu có lỗi! Vui lòng kiểm tra lại dữ liệu của bạn!",
      });
    }

    // Kiểm tra xem email đã tồn tại trong cơ sở dữ liệu hay chưa
    const existingUser = await Customer.findOne({ email: req.body.email });

    if (existingUser) {
      // Nếu email đã tồn tại, trả về lỗi
      return res.status(400).json({
        error: "Email đã tồn tại. Vui lòng sử dụng một email khác.",
      });
    }

    // Nếu dữ liệu hợp lệ, tiếp tục xử lý và lưu vào cơ sở dữ liệu
    const customer = new Customer(req.body);
    await customer.save();
    res.json("Đăng ký thành công");
  } catch (err) {
    console.error(err);
    // Sử dụng `next` để truyền lỗi tới middleware xử lý lỗi chung (error handler)
    return next(new APIError(500, "Đã có lỗi xảy ra khi đăng ký"));
  }
};

exports.signIn = async (req, res, next) => {
  try {
    // Định nghĩa schema validation cho dữ liệu đầu vào (email và password)
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    // Validate dữ liệu đầu vào với schema
    const { error } = schema.validate(req.body);

    if (error) {
      return res
        .status(400)
        .json({ error: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại." });
    }

    const { email, password } = req.body;

    // Tìm người dùng theo email
    const user = await Customer.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ error: "Email hoặc mật khẩu không chính xác." });
    }

    // Kiểm tra mật khẩu bằng bcrypt
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Mật khẩu không chính xác." });
    }

    // Nếu đăng nhập thành công, tạo mã thông báo (token)
    const token = jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: "24h",
    });

    // Thiết lập cookie trước
    res.cookie("tokenCookie", token);
    res.cookie("userId", user._id);

    res.status(200).json({ message: "Đăng nhập thành công", token });
  } catch (error) {
    return next(new APIError(500, "Đã có lỗi xãy ra khi đăng nhập"));
  }
};

exports.signOut = (req, res, next) => {
  try {
    res.clearCookie("tokenCookie");
    res.status(200).json("Bạn đã đăng xuất thành công");
  } catch (error) {
    return next(new APIError(500, "Đã có lỗi xãy ra khi đăng xuất"));
  }
};

exports.getProfile = async (req, res, next) => {
  try {
    const userId = req.cookies["userId"];
    // res.json(userId);
    const user = await Customer.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    return next(new APIError(500, "Lỗi lấy dữ liệu người dùng"));
  }
};
