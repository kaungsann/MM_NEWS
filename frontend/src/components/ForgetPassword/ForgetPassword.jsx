import React, { useState, useEffect } from "react";
import Icons from "../img/icons.png";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import "react-toastify/dist/ReactToastify.css";
import { postApi } from "../Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgetPassword() {
  const [fgMail, setfgMail] = useState("");
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  console.log("user email is ", fgMail);
  const forgetApi = async () => {
    const response = await fetch("http://127.0.0.1:5000/user/forget-password", {
      method: "POST",
      body: JSON.stringify({ email: fgMail }),
      headers: {
        "content-type": "application/json",
      },
    });
    setload(false);
    let resData = await response.json();
    if (resData.con) {
      toast("Pls Check Your Email  ");
      fgMail(null);
    } else {
      toast(resData.message);
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setload(true);
    forgetApi();
  };

  return (
    <>
      <ToastContainer />
      <div class="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="mx-auto h-10 w-auto" src={Icons} alt="Your Company" />
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Enter Your Email
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST" onSubmit={sendEmail}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  onChange={(e) => setfgMail(e.target.value)}
                  required
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-cyan-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                {load && (
                  <ClipLoader
                    color={"#9ca3af"}
                    loading={load}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className="mx-4"
                  />
                )}
                Send Email
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {/* Not a member? */}

            <Link
              to="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Go to main page
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
