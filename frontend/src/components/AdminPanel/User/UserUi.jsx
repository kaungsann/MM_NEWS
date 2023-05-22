import React from "react";
import { removeUser } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function UserUi({ users, deleteUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const banUser = () => {
    dispatch(removeUser(null));
    navigate("/register");
  };
  console.log(users);
  return (
    <>
      <div className=" flex flex-wrap">
        <div className="flex mx-2 flex-col font-serif  flex-wrap p-4 rounded-lg shadow-lg bg-slate-100 my-3">
          <span className="lg:text-2xl my-1 text-slate-600 font-bold">
            {users.name}
          </span>
          <span className=" my-1 text-slate-600">{users.email}</span>
          <span className=" my-1 text-slate-600">{users.phone}</span>
          <span className="  text-slate-600">
            {users.role[0] ? users.role : "This user no have role"}
          </span>
          <span className="  text-slate-600">
            {users.permit[0] ? users.permit : "This user no have permit"}
          </span>

          <span className=" my-1 text-slate-600">
            {new Date(users.create).toLocaleDateString() +
              " ( " +
              new Date(users.create).toLocaleTimeString() +
              " ) "}
          </span>
          <div className=" mt-2  flex justify-around">
            <button className="lg:text-sm bg-[#1f30c9] p-2 text-white rounded-sm shadow-sm   hover:bg-[#4a57c9]">
              Add Ower Role
            </button>
            <button className="lg:text-sm mx-3 bg-cyan-700 p-2 text-white rounded-sm shadow-sm  hover:bg-cyan-600">
              Add Manager Role
            </button>

            <button
              className="lg:text-sm  bg-[#a71616] mx-3 p-2 text-white rounded-sm shadow-sm   hover:bg-[#f14b4b]"
              onClick={() => {
                deleteUser(users._id);
              }}
            >
              Ban User
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserUi;
