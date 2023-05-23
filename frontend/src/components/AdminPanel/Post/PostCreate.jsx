import React, { useState, useEffect } from "react";

function PostCreate() {
  const [category, setCategory] = useState([]);
  const [tag, setTag] = useState([]);
  const catApi = async () => {
    const response = await fetch("http://127.0.0.1:5000/category/");
    let resData = await response.json();
    console.log(resData);
    setCategory(resData.results);
  };
  const tagApI = async () => {
    const response = await fetch("http://127.0.0.1:5000/tag/");
    let resData = await response.json();
    if (resData.con) {
      console.log(resData);
      setTag(resData.results);
    } else {
      console.log(resData);
    }
  };
  useEffect(() => {
    catApi();
    tagApI();
  });
  return (
    <>
      <div>PostCreate</div>
      <div className="w-3/5 mx-auto p-4">
        <form>
          <div className="mt-3 flex w-full">
            <div className="w-2/4">
              <label
                htmlFor="Category Detals"
                className="block text-sm font-medium leading-6 text-gray-900 mb-2"
              >
                Category Name
              </label>
              <select
                // onClick={(e) => setTag(e.target.value)}
                className="p-2.5 bg-white   w-full block  rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {category.map((cat) => (
                  <option
                    className="mt-2 placeholder:text-gray-400"
                    key={cat._id}
                    value={cat._id}
                  >
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mx-4 w-2/4">
              <label
                htmlFor="Category Detals"
                className="block text-sm font-medium leading-6 text-gray-900 mb-2"
              >
                Tag Name
              </label>
              <select className="w-full p-2.5 order-solid bg-white  block  rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                {tag.map((tg) => (
                  <option className="mt-2" key={tg._id} value={tg._id}>
                    {tg.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Post Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                type="text"
                name="name"
                className="w-full px-2 block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                required
                minLength={5}
                placeholder="Enter Category Name"
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="Category Detals"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Post Details
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                placeholder="Enter Text"
                required
                // onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>

          <div className="flex mt-3">
            <div className="mt-2 flex items-center gap-x-3">
              <button
                type="submit"
                className="bg-cyan-700 text-slate-200  rounded-md  px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-cyan-600"
              >
                Add Post
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

export default PostCreate;
