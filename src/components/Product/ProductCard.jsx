import React from "react";

const ProductCard = ({ products }) => {
  return (
    <>
      <div className="card">
        <div className="relative cursor-pointer group overflow-hidden">
          <img
            className="transform group-hover:scale-105 group-hover:rotate-3 transition duration-300"
            src={products.image}
            alt={products.name}
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="absolute text-white text-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 transform scale-90 group-hover:scale-100">View Details</span>
          </div>
          <div className="bg-black opacity-0 absolute inset-0 group-hover:opacity-50 transition duration-300 flex justify-center items-center"></div>
        </div>
        <div className="card-content">
          <h3 className="product-name">{products.name}</h3>
          <div className="flex items-center gap-3 flex-wrap">
            <p className="product-price">
              Rp{new Intl.NumberFormat("id-ID").format(products.price)}
            </p>
            <p className="product-discount-price">
              Rp{new Intl.NumberFormat("id-ID").format(products.discountPrice)}
            </p>
          </div>
          <button className="card-button">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
