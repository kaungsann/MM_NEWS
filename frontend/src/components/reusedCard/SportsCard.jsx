import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneLike } from "react-icons/ai";
function SportsCard({ sport }) {
  return (
    <div className="flex w-80 h-40 bg-slate-100 p-4">
      <img
        src={`http://127.0.0.1:5000/uploads/${sport.image}`}
        className="w-32 h-32"
      />
      <div className="mx-4 ">
        <span className="text-sm text-slate-600">{sport.title}</span>
        <Link
          to={`/postdetail/${sport._id}`}
          className="text-sm text-slate-400 mx-3"
        >
          see more ...
        </Link>
        <div className="">
          <div className="flex  cursor-pointer  items-center">
            <AiTwotoneLike className="hover:rotate-2	 text-xl text-cyan-500 hover:text-cyan-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125 duration-300" />
            <span className="mx-1">{sport.like}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportsCard;
