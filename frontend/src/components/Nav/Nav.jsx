import { useEffect, useState } from "react";

import icons from "../img/icons.png";

import { HiOutlineUser } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/actions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ownerDocument } from "@mui/material";

function Nav() {
  const localDb = "MMNews";
  const userData = useSelector((state) => state.userData);
  const [toggle, settoggle] = useState(false);
  const [valid, setValid] = useState(false);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const Toggle = () => {
    settoggle(!toggle);
  };

  const logout = () => {
    localStorage.removeItem(localDb);
    dispatch(removeUser(null));
    settoggle(!toggle);
    navigator("/login");
  };
  const warmingAlert = () => {
    !userData && toast("You need to first register and login");
  };

  const isAdmin =
    userData &&
    userData.role &&
    userData.role.length > 0 &&
    userData.role[0]?.name === "OWNER";

  return (
    <>
      <ToastContainer />
      <nav className="bg-cyan-800 sticky top-0 z-20">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src={icons}
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src={icons}
                  alt="Your Company"
                />
              </div>

              <div className="hidden sm:ml-6 sm:block ">
                {userData && (
                  <div className="flex space-x-4 transition ease-in-out delay-150 opacity-100 ">
                    {/*  Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <Link
                      to={userData && "/home"}
                      onClick={warmingAlert}
                      className="transition ease-in-out delay-150 opacity-100 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      to={userData && "/local"}
                      onClick={warmingAlert}
                      className="transition ease-in-out delay-150 opacity-100 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Local
                    </Link>
                    <Link
                      to={userData && "/international"}
                      onClick={warmingAlert}
                      className="transition ease-in-out delay-150 opacity-100 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      International
                    </Link>
                    <Link
                      to={userData && "/about"}
                      onClick={warmingAlert}
                      className=" transition ease-in-out delay-150 opacity-100 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      About
                    </Link>
                    {/* {userData.role.name === "OWNER" && (
        <Link
          to="/admin"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        >
          Admin
        </Link>
      )} */}

                    {isAdmin && (
                      <Link
                        to="/admin"
                        className="transition ease-in-out delay-150 opacity-100 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Admin
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <!-- Profile dropdown --> */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full bg-white-800 text-sm focus:outline-none focus:ring-1 focus:ring-gray focus:ring-offset-1 focus:ring-offset-gray-400"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={Toggle}
                  >
                    <span className="sr-only">Open user menu</span>

                    <HiOutlineUser className="h-8 w-8 rounded-full text-slate-400" />
                  </button>
                </div>

                {/* 
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          */}

                {toggle && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                  >
                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                    {userData && (
                      <Link
                        to="/login"
                        className="block px-4 py-2 h-full text-sm text-gray-700 hover:bg-slate-300"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-0"
                        onClick={logout}
                      >
                        Logout
                      </Link>
                    )}
                    {!userData && (
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-1"
                        onClick={() => settoggle(!toggle)}
                      >
                        Login
                      </Link>
                    )}
                    {!userData && (
                      <Link
                        to="/register"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300"
                        tabIndex="-1"
                        role="menuitem"
                        id="user-menu-item-0"
                        onClick={() => settoggle(!toggle)}
                      >
                        Register
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state.  */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Local
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              International
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
