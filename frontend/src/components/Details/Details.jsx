import React, { useEffect, useState } from "react";
import imag from "../img/biden.jpg";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const singlePost = async () => {
    const response = await fetch(`http://127.0.0.1:5000/post/${id}`);
    const resData = await response.json();
    setDetail(resData.results);
    console.log(resData.results);
  };
  useEffect(() => {
    singlePost();
  });
  return (
    <>
      <div className="flex flex-col justify-center w-10/12 mx-auto my-8 p-10">
        <img
          src={`http://127.0.0.1:5000/uploads/${detail.image}`}
          className="w-8/12 h-96 mx-auto my-2 rounded-md shadow-md"
        />
        <span className="text-slate-800 text-3xl font-serif my-4 text-center">
          {detail.title}
        </span>
        <p className="my-4 font-serif text-2xl text-slate-700">{detail.text}</p>
      </div>
    </>
  );
}

export default Details;
