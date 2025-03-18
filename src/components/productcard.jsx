// write product card here
// cart/productcard.jsx

import React from "react";
import Button from "../components/button"; // Import the button component

const ProductCard = () => {
  // Static Data for the product
  const productImage = "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-flame-lighted-car-desktop-wallpaper-hd-1920x1080-image_2935337.jpg" // Example image URL
  const productName = "Super Product";
  const productPrice = "$11,999";

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} className="product-image" />
      <h2 className="product-name">{productName}</h2>
      <p className="product-price">{productPrice}</p>
      <Button label="View Product" /> {/* Use the Button component */}
    </div>
  );
};

export default ProductCard;
