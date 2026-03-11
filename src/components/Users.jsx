import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/Users").then((data) => {
      console.log(data?.data);
      setUser(data?.data);
    });
  }, []);
  return (
    <div>
      <div className="cards">
        {user.map((item, index) => (
          <div key={index} className="card">
            <p className="id">{item?.id}</p>
            <p className="id">{item?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
