import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Addproduct from "./pages/Addproduct";
import Products from "./pages/Products";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="min-h-full bg-gray-200">
      <Toaster />
      {showPopup && (
        <Addproduct showPopup={showPopup} setShowPopup={setShowPopup} />
      )}
      <div className="bg-white w-full p-5 px-10 flex justify-between items-center">
        <div className="font-extrabold flex text-indigo-400 text-3xl">Inv.</div>
        <div
          className="bg-indigo-400 cursor-pointer p-2 px-3 rounded font-semibold text-white"
          onClick={() => setShowPopup(true)}
        >
          Add Product
        </div>
      </div>
      <Products />
    </div>
  );
};

export default App;
