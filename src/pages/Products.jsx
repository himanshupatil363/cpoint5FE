import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Product from "../components/Product";
import { ProductContext } from "../context/ProductContext";
const Products = () => {
  const { getProductList, productList } = useContext(ProductContext);
  useEffect(() => {
    getProductList();
  }, []);
  return (
    <div className="p-10">
      {productList.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default Products;
