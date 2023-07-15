import React, { useEffect, useState } from "react";
import CardCategory from "./CardCategory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BeatLoader from "react-spinners/BeatLoader";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function AllCategory() {
  const [category, setCategory] = useState([]);
  const [loading, setloading] = useState(false);
  const userData = useSelector((state) => state.userData);

  const catApi = async () => {
    const response = await fetch("https://mnews-api.onrender.com/category/");
    let resData = await response.json();
    setCategory(resData.results);
  };

  const deleteCategoryApi = async (id) => {
    const deleteCard = await fetch(
      `https://mnews-api.onrender.com/category/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${userData.token}`,
        },
      }
    );
    const resData = await deleteCard.json();
    catApi();
    if (resData.con) {
      setloading(false);
    }
  };

  useEffect(() => {
    catApi();
  }, []);
  return (
    <div className="relative">
      <h1 className="mx-3 text-xl font-serif ">ALL CATEGORY</h1>
      <ToastContainer />

      {loading && (
        <BeatLoader
          color={"#14b8a6"}
          loading={loading}
          aria-label="Loading Spinner"
          size={20}
          data-testid="loader"
          className="absolute top-0 mx-96 my-60 bottom-0 left-0 "
        />
      )}

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
