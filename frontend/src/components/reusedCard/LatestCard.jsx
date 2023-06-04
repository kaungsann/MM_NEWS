import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

export default function LatestCard({ card, addLike }) {
  const [isDisable, setIsDisable] = useState(false);
  const [disLike, setDisLike] = useState(false);

  const disablelike = {
    pointerEvents: isDisable && "none",
  };
  const disLikes = {
    pointerEvents: disLike && "none",
  };
  return (
    <div className="w-64  h-96 p-3 my-8 cursor-pointer ">
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
        <div className=" flex  bg-slate-100 flex-col ">
          <div className="w-20 flex flex-col ">
            <span className="mx-3 text-slate-500">{card.like}</span>
            <div className="flex items-center">
              <div className="flex  cursor-pointer   items-center ">
                <AiTwotoneLike
                  style={disablelike}
                  className="text-xl text-cyan-500 hover:text-cyan-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                  onClick={() => {
                    addLike(card._id, 1), setIsDisable(true);
                  }}
                />
              </div>
              <div className="flex  cursor-pointer  items-center mx-3">
                <AiTwotoneDislike
                  style={disLikes}
                  className="text-xl text-cyan-500 hover:text-cyan-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                  onClick={() => {
                    addLike(card._id, 0), setDisLike(true);
                  }}
                />
                {/* <span className="mx-1">{card.like}</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
