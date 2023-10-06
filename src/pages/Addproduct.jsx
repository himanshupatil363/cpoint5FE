import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { baseUrl } from "../config";
import { ProductContext } from "../context/ProductContext";
const Addproduct = ({ setShowPopup }) => {
  const { getProductList } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    image: null,
  });
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "image" ? files[0] : value,
    }));
  };
  const handleSubmit = (e) => {
    toast.loading("Adding..", {
      id: "toast",
    });
    e.preventDefault();
    const formDataObject = new FormData();
    for (const key in formData) {
      formDataObject.append(key, formData[key]);
    }
    axios
      .post(`${baseUrl}/products/add`, formDataObject)
      .then((res) => {
        console.log(res);
        if (res.status == 201) {
          toast.success("Product Added Successfully", {
            id: "toast",
          });
          getProductList();
          setShowPopup(false);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="absolute h-screen w-screen z-10">
      <div className="backdrop-blur-sm backdrop-brightness-90 h-full w-full flex justify-center items-center">
        <div className="bg-white w-1/2 shadow-md rounded-md px-10 py-8">
          <div className="text-center font-semibold text-2xl mb-6">
            Product Details
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Title</label>
              <input
                className="border rounded px-2 py-1 w-full"
                type="text"
                name="name"
                required
                id="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-2">
              <label htmlFor="description">Description</label>
              <textarea
                className="border rounded px-2 py-1 w-full"
                name="description"
                id="description"
                required
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
              ></textarea>
            </div>
            <div className="flex w-full gap-6 mt-2">
              <div className="w-full">
                <label htmlFor="category">Category</label>{" "}
                <input
                  className="border rounded px-2 py-1 w-full"
                  type="text"
                  name="category"
                  required
                  id="category"
                  value={formData.category}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full">
                <label htmlFor="price">Price</label>{" "}
                <input
                  className="border rounded px-2 py-1 w-full"
                  type="number"
                  name="price"
                  id="price"
                  required
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex gap-6 mt-2">
              <div className="w-full">
                <label htmlFor="quantity">Quantity</label>
                <input
                  className="border rounded px-2 py-1 w-full"
                  type="number"
                  name="quantity"
                  id="quantity"
                  required
                  value={formData.quantity}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full">
                <label htmlFor="image">Image</label>{" "}
                <input
                  className="border rounded px-2 w-full"
                  type="file"
                  name="image"
                  id="image"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                className="bg-gray-300 px-4 py-1.5 rounded-md font-semibold"
                onClick={() => {
                  setFormData({
                    name: "",
                    description: "",
                    price: "",
                    quantity: "",
                    category: "",
                    image: null,
                  });
                  setShowPopup(false);
                }}
              >
                Cancel
              </button>
              <button
                className="bg-indigo-400 text-white font-semibold px-4 py-1.5 rounded-md"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
