const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      text: true,
      trim: true,
      maxLength: [100, "Product name cannot exceed 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
      maxLength: [5, "Price cannot exceed 5 characters"],
      default: 0.0,
    },

    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    inventory_count: {
      type: Number,
      required: [true, "Please enter inventory_count for this product"],
      default: 1,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Product", productSchema);
