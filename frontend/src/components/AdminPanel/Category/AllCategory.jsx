import React, { useEffect, useState } from "react";
import CardCategory from "./CardCategory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function AllCategory() {
  const [category, setCategory] = useState([]);
  const userData = useSelector((state) => state.userData);

  const catApi = async () => {
    const response = await fetch("http://127.0.0.1:5000/category/");
    let resData = await response.json();
    console.log(resData);
    setCategory(resData.results);
  };

  const deleteCategoryApi = async (id) => {
    const deleteCard = await fetch(`http://127.0.0.1:5000/category/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${userData.token}`,
      },
    });
    const resData = await deleteCard.json();
    catApi();
    console.log(resData);
    if (resData) {
      toast(resData);
    }
  };

  useEffect(() => {
    catApi();
  }, []);
  return (
    <div>
      <h1 className="mx-3 text-xl font-serif">ALL CATEGORY</h1>
      <ToastContainer />
      {/* <Link to="/admin/category/create">
        <button className="p-1  bg-cyan-700 w-28 text-slate-200 mt-4 mb-3 rounded-md hover:bg-cyan-600">
          Add +
        </button>
      </Link> */}
      <div className="flex  flex-wrap  p-4">
        {category.length > 0 &&
          category.map((card) => (
            <CardCategory
              key={card._id}
              card={card}
              deleteCard={deleteCategoryApi}
            />
          ))}
      </div>
    </div>
  );
}

export default AllCategory;
