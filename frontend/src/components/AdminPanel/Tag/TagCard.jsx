import React from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

function TagCard({ tagCard, deleteCard }) {
  return (
    <>
      <div className=" bg-slate-100 shadow-lg rounded-sm w-64 mx-4 mt-8">
        <div className="text-red-500 text-2xl mx-2">{tagCard.name}</div>

        <span className=" mx-2 mt-2 text-cyan-600">
          {new Date(tagCard.create).toLocaleDateString() +
            " ( " +
            new Date(tagCard.create).toLocaleTimeString() +
            " ) "}
        </span>
        <div className="flex justify-around bg-slate-300 p-3 mt-4">
          <Link to={`/admin/tags/edit/${tagCard._id}`}>
            <FiEdit className="lg:text-2xl text-[#0891b2] hover:text-cyan-500" />
          </Link>
          <Link>
            <AiOutlineDelete
              className="lg:text-2xl text-[#b91c1c] hover:text-red-500"
              onClick={() => deleteCard(tagCard._id)}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default TagCard;
