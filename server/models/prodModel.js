const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter product name"],
    text : true,
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [5, "Price cannot exceed 5 characters"],
    default: 0.0,
  },
  image : {
    type: String
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  category: {
    type: String,
    enum : ["mens", "children", "womens", "seniors"],
    required: [true, "Please select categeory for this product"],    
  },
   
},
{
    timestamps : true,
    versionKey : false,
});


module.exports = mongoose.model("Product", productSchema);
