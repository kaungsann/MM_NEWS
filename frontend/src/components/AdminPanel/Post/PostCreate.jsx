import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PostCreate() {
  const [categorys, setCategorys] = useState([]);
  const [tags, setTags] = useState([]);
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [cat, setCat] = useState("");
  const [tag, setTag] = useState("");
  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();

  const fileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const creatPostAPi = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("tag", tag);
    formData.append("category", cat);
    formData.append("title", title);
    formData.append("text", text);

    const response = await fetch("http://127.0.0.1:5000/post/", {
      method: "POST",
      body: formData,
      headers: {
        authorization: `Bearer ${userData.token}`,
      },
    });
    const resData = await response.json();
    if (resData.con) {
      navigate("/admin/posts/all");
    } else {
    }
  };

  const catApi = async () => {
    const response = await fetch("http://127.0.0.1:5000/category/");
    let resData = await response.json();
    setCategorys(resData.results);
  };
  const tagApI = async () => {
    const response = await fetch("http://127.0.0.1:5000/tag/");
    let resData = await response.json();
    setTags(resData.results);
  };

  useEffect(() => {
    catApi();
    tagApI();
  }, []);

  const postSubmit = (e) => {
    e.preventDefault();
    creatPostAPi();
  };
  return (
    <>
      <div className="mx-3 text-xl font-serif">PostCreate</div>
      {/* <div>
        <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div class="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p class="text-sm text-gray-700">
                Showing
                <span class="font-medium">1</span>
                to
                <span class="font-medium">10</span>
                of
                <span class="font-medium">97</span>
                results
              </p>
            </div>
            <div>
              <nav
                class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-current="page"
                  class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </a>
                <a
                  href="#"
                  class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-3/5 mx-auto p-4">
        <form onSubmit={postSubmit}>
          <div className="mt-2">
            <label
              htmlFor="category-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Post photo
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
                      required
                      onChange={fileChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex w-full">
            <div className="w-2/4">
              <label
                htmlFor="CategoryId"
                className="block text-sm font-medium leading-6 text-gray-900 mb-2"
              >
                Category Name
              </label>
              <select
                id="CategoryId"
                required
                onChange={(e) => setCat(e.target.value)}
                className="p-2.5 bg-white   w-full block  rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option disabled selected value>
                  Select an option
                </option>
                {categorys.map((cats) => (
                  <option key={cats._id} value={cats._id}>
                    {cats.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mx-4 w-2/4">
              <label
                htmlFor="tagId"
                className="block text-sm font-medium leading-6 text-gray-900 mb-2"
              >
                Tag Name
              </label>
              <select
                required
                id="tagId"
                onChange={(e) => setTag(e.target.value)}
                className="w-full p-2.5 order-solid bg-white  block  rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option disabled selected value>
                  Select an option
                </option>
                {tags.map((tags) => (
                  <option key={tags._id} value={tags._id}>
                    {tags.name}
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
                onChange={(e) => setTitle(e.target.value)}
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
