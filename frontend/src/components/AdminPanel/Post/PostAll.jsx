import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";
import { Link } from "@mui/material";
function PostAll() {
  const [post, setPost] = useState([]);
  const [pages, setPages] = useState(0);
  const userData = useSelector((state) => state.userData);
  const postApi = async () => {
    const response = await fetch(
      `http://127.0.0.1:5000/post/paginate/${pages}`
    );
    let resData = await response.json();
    setPost(resData.results);
    //  console.log("post data is ", resData.results);
  };

  const deletePost = async (id) => {
    const response = await fetch(`http://127.0.0.1:5000/post/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${userData.token}`,
      },
    });
    const resData = await response.json();
    postApi();
    if (resData.con) {
      console.log("successful");
      //setloading(false);
      //  toast(resData);
    }
  };

  useEffect(() => {
    postApi();
  }, [pages]);

  const decreasePages = () => {
    if (pages > 0) {
      setPages((pre) => pre - 1);
    }
  };
  const increasePages = () => {
    setPages((pre) => pre + 1);
  };
  return (
    <>
      <div className="relative my-4">
        <div class="flex items-center justify-between border-t  px-4 py-3 sm:px-6">
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
              <p class="text-sm text-gray-700">ALL POSTS</p>
            </div>
            <div>
              <nav
                class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <Link
                  onClick={decreasePages}
                  class="mx-4 relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span class="sr-only mx-4">Previous</span>
                  <svg
                    class="h-5 w-5 "
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
                </Link>

                <Link
                  onClick={increasePages}
                  class="mx-4 relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
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
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {post.length > 0 &&
          post.map((card) => (
            <PostCard key={card._id} postCard={card} deletePost={deletePost} />
          ))}
      </div>
    </>
  );
}

export default PostAll;
