const Product = require("./../models/prodModel");
const catchAsyncErrors = require("../utils/catchAsync");

const postProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.create(req.body);

  res.status(200).json({
    success: true,
    products,
  });
});

const getProducts = catchAsyncErrors(async (req, res, next) => {
  let products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
});

// patch/update => api.v1/products/:id
const updateProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    success: true,
    products,
  });
});

module.exports = { postProducts, getProducts, updateProducts };
