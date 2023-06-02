import React from "react";
import { Link } from "react-router-dom";

function RightSide({ card }) {
  return (
    <div className="mx-6 flex bg-white p-4">
      <img
        src={`http://127.0.0.1:5000/uploads/${card.image}`}
        className="lg:h-32 lg:w-36"
      />
      <div className="mx-6">
        <span className="text-slate-500 font-sans">
          {new Date(card.create).toLocaleDateString()}
        </span>
        <p className="text-sm font-sans font-bold text-slate-600">
          {card.title}
        </p>
        <Link to={`/postdetail/${card._id}`} className="text-slate-500 text-sm">
          See MORE
        </Link>
      </div>
    </div>
  );
}

export default RightSide;
