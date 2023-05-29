import React from "react";

function MainCard({ hotCard }) {
  return (
    <>
      <div className="w-full  flex">
        <div className="w-1/2 ">
          <img
            src={`http://127.0.0.1:5000/uploads/${hotCard.image}`}
            className=" rounded-lg shadow-md  h-64 w-4/5"
          />
        </div>
        <div className="w-1/2">
          <span className="text-slate-500 font-sans my-1 ">
            {new Date(hotCard.create).toLocaleDateString() +
              " ( " +
              new Date(hotCard.create).toLocaleTimeString() +
              " ) "}
          </span>
          <div className="w-8/12">
            <h3 className="text-3xl my-1 font-san">{hotCard.title}</h3>
            <p className="text-slate-600 my-2">
              {hotCard.text.substring(0, 30)}
            </p>
            <div className="text-slate-400">See More</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCard;
