import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function EditCategory() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [text, setText] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  console.log(userData);
  const fileChange = (e) => {
    setFile(e.target.files[0]);
  };
  // const catApi = async () => {
  //   const response = await fetch("http://127.0.0.1:5000/category/");
  //   let resData = await response.json();
  //   console.log(resData);
  // };
  // const editCategoyApi = async () => {
  //   const response = await fetch(`http://127.0.0.1:5000/category/${id}`, {
  //     method: "PATCH",
  //     body: JSON.stringify({ file: file, name: name, text: text }),
  //     headers: {
  //       "content-type": "application/json",
  //       authorization: `Bearer  ${userData.token}`,
  //     },
  //   });

  //   const resData = await response.json();
  //   catApi();
  //   if (resData.con) {
  //     navigate("/admin/category/all");
  //   } else {
  //     console.log(resData);
  //     toast(resData.message);
  //   }
  // };
  // useEffect(() => {
  //   catApi();
  // }, []);

  const editCategoyApi = async () => {
    console.log(file);

    // const editCat = {
    //   name,
    //   text,
    //   file,
    // };
    const formData = new FormData();
    formData.append("name", name);
    formData.append("text", text);
    formData.append("file", file);

    const response = await fetch(`http://127.0.0.1:5000/category/${id}`, {
      method: "PATCH",
      body: formData,
      // body: JSON.stringify(editCat),
      headers: {
        //"content-type": "application/json",
        authorization: `Bearer ${userData.token}`,
      },
    });
    const resData = await response.json();

    if (resData.con) {
      navigate("/admin/category/all");
    } else {
      toast(resData.message);
    }
  };
  const singleCategory = async () => {
    let response = await fetch(`http://127.0.0.1:5000/category/${id}`);
    let resData = await response.json();
    setName(resData.results.name);
    setText(resData.results.text);
  };
  useEffect(() => {
    singleCategory();
  }, []);

  const submitCategory = (e) => {
    e.preventDefault();
    editCategoyApi();
  };

  return (
    <>
      <h2>Edit Category</h2>
      <ToastContainer />
      <div className="w-3/5 mx-auto p-4">
        <form onSubmit={submitCategory}>
          <div className="mt-2">
            <label
              htmlFor="category-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Category photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-cyan-700 px-6 py-10">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={fileChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Category Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                type="text"
                name="name"
                className="w-full px-2 block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={name}
                minLength={5}
                placeholder="Enter Category Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="Category Detals"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Category Details
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={text}
                placeholder="Enter Text"
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>

          <div className="flex mt-3">
            <div className="mt-2 flex items-center gap-x-3">
              <button
                type="submit"
                className="bg-cyan-700 text-slate-200  rounded-md  px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-cyan-600"
              >
                Edit Category
              </button>
            </div>
            <div className="mt-2 flex items-center mx-3">
              <button
                type="reset"
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

export default EditCategory;
