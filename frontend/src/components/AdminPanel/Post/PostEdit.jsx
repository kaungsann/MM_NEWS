import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
function PostEdit() {
  const [categorys, setCategorys] = useState([]);
  const [tags, setTags] = useState([]);
  const [cat, setcat] = useState("");
  const [tag, settag] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState("");

  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const fileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const EditPostAPi = async () => {
    console.log("user id is ", id);
    const catData = { file, cat, tag, title, text };
    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("file", file);
    formData.append("category", cat);
    formData.append("tag", tag);

    const response = await fetch(`https://mnews-api.onrender.com/post/${id}`, {
      method: "PATCH",
      //  body: formData,
      body: JSON.stringify(catData),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${userData.token}`,
      },
    });
    const resData = await response.json();
    if (resData.con) {
      navigate("/admin/posts/all");
    } else {
      console.log(resData);
    }
  };

  const catApi = async () => {
    const response = await fetch("http://127.0.0.1:5000/category/");
    let resData = await response.json();
    if (resData.con) {
      setCategorys(resData.results);
      // setcat(resData.results[0]._id);
    } else {
      console.log(resData);
    }
  };
  const tagApI = async () => {
    const response = await fetch("http://127.0.0.1:5000/tag/");
    let resData = await response.json();
    if (resData.con) {
      setTags(resData.results);
      // settag(resData.results[0]._id);
    } else {
      console.log(resData);
    }
  };
  const getOnePost = async () => {
    const response = await fetch(`https://mnews-api.onrender.com/post/${id}`);
    const resData = await response.json();
    const catPost = resData.results;
    if (catPost.con) {
      setLoading(false);
    }
    console.log(catPost);
    setcat(catPost.category);
    settag(catPost.tag);
    setTitle(catPost.title);
    setText(catPost.text);
  };

  useEffect(() => {
    getOnePost();
    catApi();
    tagApI();
  }, []);

  const postSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    EditPostAPi();
    // console.log("all post data is ", title, text, cat, tag, file);
    // EditPostAPi();
  };
  return (
    <>
      <div className="mx-3 text-xl font-serif">PostEdit</div>
      <div className="w-3/5 mx-auto p-4">
        <form onSubmit={postSubmit}>
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
                onChange={(e) => setcat(e.target.value)}
                className="p-2.5 bg-white   w-full block  rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {categorys.length > 0 &&
                  categorys.map((cats) => (
                    <option
                      key={cats._id}
                      value={cats._id}
                      selected={cats._id === cat}
                    >
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
                id="tagId"
                onChange={(e) => settag(e.target.value)}
                s
                className="w-full p-2.5 order-solid bg-white  block  rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {tags.length > 0 &&
                  tags.map((tags) => (
                    <option
                      key={tags._id}
                      value={tags._id}
                      selected={tags._id === tag}
                    >
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
                id="text"
                name="text"
                rows={3}
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
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
                Edit Post
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

export default PostEdit;
