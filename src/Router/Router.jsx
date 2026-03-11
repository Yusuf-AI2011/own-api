import React from "react";
import Products from "../components/Products";
import Users from "../components/Users";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <div className="Router">
      <Routes>
        <Route path="/" element={""} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<h1>Page not Found!</h1>} />
      </Routes>
    </div>
  );
};

export default Router;
