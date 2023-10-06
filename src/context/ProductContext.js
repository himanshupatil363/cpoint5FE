import axios from "axios";
import React, { createContext, useState } from "react";
import { baseUrl } from "../config";
export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const getProductList = () => {
    axios
      .get(`${baseUrl}/products`)
      .then((res) => setProductList(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <ProductContext.Provider
      value={{ productList, setProductList, getProductList }}
    >
      {children}
    </ProductContext.Provider>
  );
};
