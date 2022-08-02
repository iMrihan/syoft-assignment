import React from "react";

export default function AddProduct() {
  return (
    <form>
      <h1>Admin Page</h1>
      <input required type="text" placeholder="Enter product name" />
      <input required type="number" placeholder="Enter product price" />
      <input required type="text" placeholder="Enter product description" />
      <input required type="number" placeholder="Enter inventory count" />
      <input required type="submit" value="Add Product" />
    </form>
  );
}
