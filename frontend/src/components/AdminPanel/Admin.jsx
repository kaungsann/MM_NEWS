import React from "react";
import "../../App.css";
import { Link, Outlet, useParams } from "react-router-dom";

function Admin() {
  const { id } = useParams();
  return (
    <>
      {/* <h1 className="lg:text-3xl font-serif   font-medium items-center text-center mt-3">
        Admin Panel
      </h1> */}
      <div className="cursor-pointer mt-6     relative">
        <div className="row-span-3 lg:w-72 bg-white  p-3 rounded-md mt-3 shadow-l fixed top-14 left-0 bottom-0">
          <span className="items-center text-center flex justify-center  text-slate-600 text-2xl font-serif font-bold mb-8">
            Admin Dashboard
          </span>
          <div className="mt-4">
            <span className="lg:text-lg font-serif">User </span>
            <div className="flex flex-col px-3 lg:text-sm text-slate-500">
              <Link
                to="/admin/users/all"
                className="p-2 borde-solid hover:bg-slate-100 hover:rounded-md"
              >
                User All
              </Link>
            </div>
          </div>
          <div>
            <span className="lg:text-lg font-serif">Cateogry </span>
            <div className="flex flex-col px-3 lg:text-sm text-slate-500">
              <Link
                to="/admin/categorys/all"
                className="p-2 borde-solid hover:bg-slate-100 hover:rounded-md"
              >
                Category All
              </Link>
              <Link
                to="/admin/categorys/create"
                className=" p-2 hover:bg-slate-100 hover:rounded-md"
              >
                Category Create
              </Link>
            </div>
          </div>
          <div>
            <span className="lg:text-lg font-serif">Tag </span>
            <div className="flex flex-col px-3    lg:text-sm text-slate-500 ">
              <Link
                to="/admin/tags/all"
                className="p-2 borde-solid hover:bg-slate-100"
              >
                Tag All
              </Link>
              <Link
                to="/admin/tags/create"
                className=" p-2  hover:bg-slate-100 hover:rounded-md"
              >
                Tag Create
              </Link>
            </div>
          </div>
          <div>
            <span className="lg:text-lg font-serif">Post </span>
            <div className="flex flex-col px-3  lg:text-sm text-slate-500 ">
              <Link
                to="/admin/posts/all"
                exact
                index
                className="p-2 borde-solid hover:bg-slate-100"
              >
                Post All
              </Link>
              <Link
                to="/admin/posts/create"
                className=" p-2 hover:bg-slate-100 hover:rounded-md"
              >
                Post Create
              </Link>
            </div>
          </div>
        </div>
        <div className=" lg:w-4/5 ml-72  items-end">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Admin;
