const Product = require("../models/Product.model");
const APIError = require("../api-error");
const Joi = require("joi");
const ApiError = require("../api-error");

exports.create = async (req, res, next) => {
  try {
    // Xác minh dữ liệu đầu vào sử dụng Joi
    // const schema = Joi.object({
    //   productName: Joi.string().max(255).required(),
    //   productDes: Joi.string(),
    //   categoryId: Joi.string().required(), // Bạn có thể kiểm tra dữ liệu đầu vào cho categoryId tương tự
    //   price: Joi.number(),
    //   trademark: Joi.string(),
    //   origin: Joi.string(),
    // });

    // const { error } = schema.validate(req.body);

    // if (error) {
    //   return res.status(400).json({
    //     error: "Dữ liệu có lỗi! Vui lòng kiểm tra lại dữ liệu của bạn",
    //   });
    // }
    // Truy xuất thông tin về tệp đã tải lên và cập nhật trường productImg
    const uploadedFiles = req.file ? [req.file.filename] : [];
    req.body.productImg = uploadedFiles;

    // // Tạo một sản phẩm mới từ dữ liệu đầu vào
    // const newProduct = new Product(req.body);

    // // Lưu sản phẩm mới vào cơ sở dữ liệu
    // await newProduct.save();

    // // Trả về thông báo thành công hoặc sản phẩm vừa được tạo
    // res.json("Thêm sản phẩm thành công");

    res.json(req.body);
    console.log("Dữ liệu từ client:", req.body);
  } catch (err) {
    return next(new APIError(500, "Đã có lỗi xảy ra khi tạo sản phẩm"));
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    return next(
      new ApiError(500, "Đã có lỗi xãy ra khi lấy danh sách sản phẩm")
    );
  }
};

exports.update = async (req, res, next) => {
  try {
    const productId = req.params.id; // Lấy ID sản phẩm từ tham số đường dẫn

    // Kiểm tra xem có tồn tại sản phẩm với ID đã cung cấp không
    const existingProduct = await Product.findById(productId);

    if (!existingProduct) {
      return res.status(404).json({
        error: "Sản phẩm không tồn tại",
      });
    }

    // Xác minh dữ liệu đầu vào sử dụng Joi
    const schema = Joi.object({
      productName: Joi.string().max(255),
      productDes: Joi.string(),
      categoryId: Joi.string(), // Kiểm tra dữ liệu đầu vào cho categoryId tương tự
      productImg: Joi.string().max(255),
      soldOut: Joi.boolean(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        error: "Dữ liệu có lỗi! Vui lòng kiểm tra lại dữ liệu của bạn",
      });
    }

    // Cập nhật các trường dữ liệu của sản phẩm nếu có dữ liệu hợp lệ
    if (req.body.productName) {
      existingProduct.productName = req.body.productName;
    }
    if (req.body.productDes) {
      existingProduct.productDes = req.body.productDes;
    }
    if (req.body.categoryId) {
      existingProduct.categoryId = req.body.categoryId; // Tương tự cho các trường khác
    }

    // Lưu sản phẩm đã cập nhật
    await existingProduct.save();

    // Trả về sản phẩm đã cập nhật hoặc một thông báo thành công
    res.json(existingProduct);
  } catch (err) {
    return next(new APIError(500, "Đã có lỗi xảy ra khi cập nhật sản phẩm"));
  }
};

exports.delete = async (req, res, next) => {
  try {
    const productId = req.params.id; // Lấy ID sản phẩm từ tham số đường dẫn

    // Kiểm tra xem có tồn tại sản phẩm với ID đã cung cấp không
    const existingProduct = await Product.findById(productId);

    if (!existingProduct) {
      return res.status(404).json({
        error: "Sản phẩm không tồn tại",
      });
    }

    // Xóa sản phẩm
    await existingProduct.deleteOne({ _id: productId });

    // Trả về thông báo thành công
    res.json({
      message: "Sản phẩm đã được xóa thành công",
    });
  } catch (err) {
    return next(new APIError(500, "Đã có lỗi xảy ra khi xóa sản phẩm"));
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const productId = req.params.id; // Lấy ID sản phẩm từ tham số đường dẫn

    // Sử dụng Mongoose để lấy thông tin sản phẩm bằng ID
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        error: "Sản phẩm không tồn tại",
      });
    }

    // Trả về thông tin sản phẩm
    res.json(product);
  } catch (err) {
    return next(
      new APIError(500, "Đã có lỗi xảy ra khi lấy thông tin sản phẩm")
    );
  }
};
