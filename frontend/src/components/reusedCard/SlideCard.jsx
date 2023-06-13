import React from "react";
import { Link } from "react-router-dom";

function SlideCard({ card }) {
  return (
    <Link
      to={`/postdetail/${card._id}`}
      className="p-4 bg-slate-50 my-3  hover:bg-slate-200  border-solid border-2 "
    >
      <span className="text-slate-500 font-sans">
        {new Date(card.create).toLocaleDateString()}
      </span>
      <p className="text-sm font-sans font-medium  text-slate-600">
        {card.title}
      </p>
    </Link>
  );
}

export default SlideCard;
