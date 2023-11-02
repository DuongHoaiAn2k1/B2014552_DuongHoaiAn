const BillDetail = require("../models/BillDetail.model");
const APIError = require("../api-error");

exports.create = async (req, res, next) => {
  try {
    const billDetail = new BillDetail(req.body);
    await billDetail.save();
    res.json("Chi tiết hóa đơn đã được tạo thành công");
  } catch (error) {
    return next(new APIError(500, "Đã có lỗi xảy ra khi tạo chi tiết hóa đơn"));
  }
};

exports.fillAll = async (req, res, next) => {
  try {
    const billDetails = await BillDetail.find();
    res.json(billDetails);
  } catch (error) {
    return next(
      new APIError(500, "Đã có lỗi xảy ra khi lấy danh sách chi tiết hóa đơn")
    );
  }
};

exports.update = async (req, res, next) => {
  try {
    const billDetailId = req.params.id;
    const billDetail = await BillDetail.findByIdAndUpdate(
      billDetailId,
      req.body,
      { new: true }
    );

    if (!billDetail) {
      return res.status(404).json({
        error: "Chi tiết hóa đơn không tồn tại",
      });
    }

    res.json("Chi tiết hóa đơn đã được cập nhật thành công");
  } catch (error) {
    return next(
      new APIError(500, "Đã có lỗi xảy ra khi cập nhật chi tiết hóa đơn")
    );
  }
};

exports.delete = async (req, res, next) => {
  try {
    const billDetailId = req.params.id;
    const billDetail = await BillDetail.findByIdAndDelete(billDetailId);

    if (!billDetail) {
      return res.status(404).json({
        error: "Chi tiết hóa đơn không tồn tại",
      });
    }

    res.json("Chi tiết hóa đơn đã được xóa thành công");
  } catch (error) {
    return next(new APIError(500, "Đã có lỗi xảy ra khi xóa chi tiết hóa đơn"));
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const billDetailId = req.params.id;
    const billDetail = await BillDetail.findById(billDetailId);

    if (!billDetail) {
      return res.status(404).json({
        error: "Chi tiết hóa đơn không tồn tại",
      });
    }

    res.json(billDetail);
  } catch (error) {
    return next(
      new APIError(500, "Đã có lỗi xảy ra khi lấy thông tin chi tiết hóa đơn")
    );
  }
};
