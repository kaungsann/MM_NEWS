import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export default function HotNews({ hotCard }) {
  return (
    <>
      <div className="w-60 h-96 p-2">
        <span className="text-slate-500 font-sans my-1">
          {new Date(hotCard.create).toLocaleDateString() +
            " ( " +
            new Date(hotCard.create).toLocaleTimeString() +
            " ) "}
        </span>

        <img
          src={`http://127.0.0.1:5000/uploads/${hotCard.image}`}
          className="my-2 w-full h-44"
        />
        <div>
          <h3 className="text-sm font-bold my-1 font-san text-slate-600 mb-2">
            {hotCard.title}
          </h3>
          <p className="text-sm text-slate-600 ">
            {hotCard.text.substring(0, 30)}
          </p>
          <Link
            to={`/postdetail/${hotCard._id}`}
            className="text-sm text-slate-400"
          >
            see more
          </Link>
        </div>
      </div>
    </>
  );
}
