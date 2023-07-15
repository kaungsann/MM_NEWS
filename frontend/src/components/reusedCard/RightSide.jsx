import React from "react";
import { Link } from "react-router-dom";

function RightSide({ card }) {
  return (
    <Link
      to={`/postdetail/${card._id}`}
      className="mx-6 flex bg-white p-4 hover:bg-slate-200"
    >
      <img
        src={`https://mnews-api.onrender.com/uploads/${card.image}`}
        className="lg:h-32 lg:w-36"
      />
      <div className="mx-6">
        <span className="text-slate-500 font-sans">
          {new Date(card.create).toLocaleDateString()}
        </span>
        <p className="text-sm font-sans font-bold text-slate-600">
          {card.title}
        </p>
      </div>
    </Link>
  );
}

export default RightSide;
