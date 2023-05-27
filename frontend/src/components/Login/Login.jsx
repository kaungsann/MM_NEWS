import React, { useState } from "react";
import Icons from "../img/icons.png";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { addUser, removeUser } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const usersData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const loginApi = async (userData) => {
    let response = await fetch("http://127.0.0.1:5000/user/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json",
      },
    });
    let resData = await response.json();

    if (resData.con) {
      setLoading(false);
      dispatch(addUser(resData.results));
      navigate("/home");
    } else {
      toast(resData.message);
      setLoading(false);
    }
  };
  const loginUser = (e) => {
    e.preventDefault();
    setLoading(true);
    let user = {
      email,
      password,
    };

    loginApi(user);
  };
  return (
    <div>
      <ToastContainer />

      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="mx-auto h-10 w-auto" src={Icons} alt="Your Company" />
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST" onSubmit={loginUser}>
            <div>
              <label
                htmlFor="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  onChange={(e) => setemail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
              <label
                htmlFor="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              ></label>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  htmlFor="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div class="text-sm">
                  <Link to="/register">
                    <a
                      href="#"
                      class="font-semibold   text-cyan-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </Link>
                </div>
              </div>
              <div class="mt-2">
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="  px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-cyan-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
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
                Sign in
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            {/* Not a member? */}

            <Link
              to="/"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Go to main page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
