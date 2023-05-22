import React, { useEffect, useState } from "react";
import Icons from "../img/icons.png";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function () {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);

  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  // handleGoogleSignIn = (response) => {
  //   console.log(response); // Handle the response from Google Sign-In
  // };

  // useEffect(() => {
  //   window.google.accounts.id.initialize({
  //     client_id: "YOUR_CLIENT_ID",
  //     callback: handleGoogleSignIn,
  //     ux_mode: "redirect",
  //     redirect_uri: "http://localhost:5173/callback", // Replace with your callback URL
  //   });
  // });

  const registterApi = async (userData) => {
    let response = await fetch("http://127.0.0.1:5000/user/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json",
      },
    });
    const resData = await response.json();
    if (resData.con) {
      setloading(false);
      navigate("/login");
    } else {
      setloading(false);
      toast(resData.message);
    }
  };
  const registerUser = (e) => {
    setloading(true);
    e.preventDefault();
    let user = {
      name,
      phone,
      email,
      password,
    };
    registterApi(user);
  };
  return (
    <div>
      <ToastContainer />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={Icons} alt="Your Company" />

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={registerUser}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setname(e.target.value)}
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setemail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setphone(e.target.value)}
                  id="phone"
                  name="phone"
                  type="phone"
                  autocomplete="phone"
                  required
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-cyan-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading && (
                  <ClipLoader
                    color={"#9ca3af"}
                    loading={loading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className="mx-4"
                  />
                )}
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link
              to="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Go to Mainpage
            </Link>
          </p>
          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link
              to="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in google
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}
