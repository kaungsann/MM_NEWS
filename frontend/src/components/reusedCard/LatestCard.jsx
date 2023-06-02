import React from "react";
import { Link } from "react-router-dom";

export default function LatestCard({ card }) {
  return (
    <div className="w-64  h-96 p-3 my-3 cursor-pointer ">
      <img
        src={`http://127.0.0.1:5000/uploads/${card.image}`}
        className="w-full h-44  rounded-md shadow-md "
      />
      <div className="my-2">
        <span className="text-slate-500 font-sans my-1 text-sm ">
          {new Date(card.create).toLocaleDateString() +
            " ( " +
            new Date(card.create).toLocaleTimeString() +
            " ) "}
        </span>
        <h3 className="text-lg text-slate-800">{card.title}</h3>
        <p className="text-sm font-serif text-slate-600 overflow-hidden">
          {card.text.substring(0, 45)}
        </p>
        <Link to={`/postdetail/${card._id}`} className="text-slate-400">
          see more
        </Link>
      </div>
    </div>
  );
}
