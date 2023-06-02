import React from "react";
import { Link } from "react-router-dom";

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
      </div>
    </div>
  );
}

export default SportsCard;
