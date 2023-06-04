import React, { useEffect, useState } from "react";
import imag from "../img/biden.jpg";
import { useParams } from "react-router-dom";
import { AiTwotoneLike } from "react-icons/ai";
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
        <div className="">
          <div className="flex  cursor-pointer  items-center">
            <AiTwotoneLike className="text-2xl text-cyan-500 hover:text-cyan-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" />
            <span className="mx-1">+1</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
