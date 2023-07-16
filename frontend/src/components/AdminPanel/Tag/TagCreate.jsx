import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
function TagCreate() {
  let [name, setName] = useState("");
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  const [loading, setLoading] = useState(false);
  const addApiTag = async () => {
    const response = await fetch("http://127.0.0.1:5000/tag/", {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${userData.token}`,
      },
    });
    const resData = await response.json();

    if (resData.con) {
      navigate("/admin/tags/all");
    } else {
      // toast(resData.message);
    }
  };
  const submitTag = (e) => {
    setLoading(true);
    e.preventDefault();
    addApiTag();
  };
  // const resteText = () => {
  //   setName("");
  // };

  return (
    <>
      <h2 className="mx-3 text-xl font-serif">Create Tag</h2>

      <div className="w-3/5 mx-auto p-4">
        <form onSubmit={submitTag}>
          <div className="mt-4">
            <label
              htmlFor="name"
              className="spanblock text-sm font-medium leading-6 text-gray-900"
            >
              Create Tag Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                type="text"
                name="name"
                className="w-full px-2 block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={name}
                minLength={5}
                placeholder="Enter Tag Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex mt-3">
            <div className="mt-2 flex items-center gap-x-3">
              <button
                type="submit"
                className="bg-cyan-700 text-slate-200  rounded-md  px-2.5 py-1.5 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-cyan-600"
              >
                {loading && (
                  <ClipLoader
                    color={"#9ca3af"}
                    loading={loading}
                    size={12}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className="mx-1"
                  />
                )}
                Create Tag
              </button>
            </div>
            <div className="mt-2 flex items-center mx-3">
              <button
                type="reset"
                onClick={() => setName("")}
                className="bg-red-700 text-slate-200  rounded-md  px-2.5 py-1.5 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default TagCreate;
