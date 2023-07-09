import React, { useState, useEffect } from "react";
import Icons from "../img/icons.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiTwotoneEye } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addUser, removeUser } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
export default function AddNewPassword() {
  const [eye, setEye] = useState(true);
  const [pw, setPw] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.userData);
  console.log("user data in reset password", usersData);

  usersData && dispatch(removeUser(null));

  const NewPwApi = async () => {
    console.log("user new ps", pw);
    const response = await fetch(
      `http://127.0.0.1:5000/user/reset-password/${id}`,
      {
        method: "POST",
        body: JSON.stringify({ password: pw }),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    setLoaded(false);
    let resData = await response.json();
    if (resData.con) {
      toast(resData.message);
      navigate("/login");
    } else {
      toast(resData.message);
    }
  };
  const changePassword = (e) => {
    e.preventDefault();
    setLoaded(true);
    NewPwApi();
  };

  return (
    <>
      <ToastContainer />

      <div class="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8 ">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="mx-auto h-10 w-auto" src={Icons} alt="Your Company" />
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Your New Password.
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            class="space-y-6"
            action="#"
            method="POST"
            onSubmit={changePassword}
          >
            <div>
              <label
                htmlFor="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div class="mt-2">
                <div className="relative ">
                  <input
                    id="password"
                    name="password"
                    type={eye ? "password" : "text"}
                    autocomplete="current-password"
                    onChange={(e) => setPw(e.target.value)}
                    required
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {eye ? (
                    <AiFillEyeInvisible
                      className="absolute top-2 right-0 bottom-0 text-xl mx-3"
                      onClick={() => setEye(false)}
                    />
                  ) : (
                    <AiTwotoneEye
                      className="absolute top-2 right-0 bottom-0 text-xl mx-3"
                      onClick={() => setEye(true)}
                    />
                  )}
                </div>
              </div>
              <label
                htmlFor="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              ></label>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-cyan-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                {loaded && (
                  <ClipLoader
                    color={"#9ca3af"}
                    loading={loaded}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className="mx-4"
                  />
                )}
                Submit
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            {/* Not a member? */}

            <Link
              to="/"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Go to main page
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
