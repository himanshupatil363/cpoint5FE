import React from "react";
import { baseUrl } from "../config";

const Product = ({ product }) => {
  function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
  }

  return (
    <div className="flex flex-grow relative justify-between bg-white mb-6 mx-10 rounded-lg shadow p-6">
      <div className="absolute right-4 top-4 bg-indigo-200 rounded-full p-2 w-8 h-8 flex justify-center items-center">
        {product.quantity}
      </div>
      <div className="flex gap-10 h-full">
        <div className="min-w-max flex items-center">
          <img
            className="h-40 w-64 object-cover rounded-lg"
            src={`${baseUrl}/uploads/${product.image}`}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-2xl">{product.name}</div>
          <div className="bg-gray-200 w-fit px-1.5 py-0.5 rounded text-sm mt-1 text-gray-500 font-semibold">
            {product?.category?.name}
          </div>
          <div className="mt-3 mr-10">{product.description}</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-3xl font-extrabold flex mt-10">
          &#x20B9;{product.price}
        </div>
        {product?.category?.discount > 0 && (
          <div>
            <div> Discounted Price</div>
            <div className="text-3xl font-extrabold text-green-600 flex items-end">
              &#x20B9;
              {calculateDiscountedPrice(
                product.price,
                product.category.discount
              )}
              <div className="text-sm ml-3 font-bold text-gray-400">
                {product?.category?.discount}%OFF
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-2 right-2 text-sm text-gray-400 font-semibold">
        {new Date(product.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default Product;
