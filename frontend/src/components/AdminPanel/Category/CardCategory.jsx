import React from "react";
import "../../../App.css";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
function CardCategory({ card, deleteCard }) {
  return (
    <>
      <div className="cardbox  ">
        <div className=" m-2 bg-slate-100 w-64 h-62   border-2 shadow-lg  ">
          <img
            src={`http://127.0.0.1:5000/uploads/${card.image}`}
            className="w-full"
          />
          <h1 className="lg:text-xl font-serif font-bold mx-2">{card.name}</h1>
          <div className=" mx-2">
            <span className="lg:text-sm">{card.text}</span>
          </div>
          <div className="flex justify-around bg-slate-300 p-3">
            <Link to={`/admin/category/edit/${card._id}`}>
              <FiEdit className="lg:text-2xl text-[#0891b2] " />
            </Link>
            <Link>
              <AiOutlineDelete
                className="lg:text-2xl text-[#b91c1c] "
                onClick={() => deleteCard(card._id)}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCategory;
