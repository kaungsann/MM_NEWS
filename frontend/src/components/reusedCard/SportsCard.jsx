import React from "react";

function SportsCard({ sport }) {
  return (
    <div className="flex w-80 h-40 bg-slate-100 p-4">
      <img
        src={`http://127.0.0.1:5000/uploads/${sport.image}`}
        className="w-32 h-32"
      />
      <div className="mx-4 ">
        <span className="text-sm text-slate-600">{sport.title}</span>
        <p className="text-sm text-slate-400">see more ...</p>
      </div>
    </div>
  );
}

export default SportsCard;
