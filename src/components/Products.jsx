import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/Products").then((data) => {
      console.log(data?.data);
      setProduct(data?.data);
    });
  }, []);
  return (
    <div>
      <div className="cards">
        {product.map((item, index) => (
          <div key={index} className="card">
            <p className="id">{item?.id}</p>
            <p className="id">{item?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
