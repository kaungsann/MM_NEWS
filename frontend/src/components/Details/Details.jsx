import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { BsFillSendFill } from "react-icons/bs";
function Details() {
  const { id } = useParams();
  const [showment, setShowMent] = useState(false);
  const [text, setText] = useState("");
  const [detail, setDetail] = useState({});
  const { comment } = detail;

  const userData = useSelector((state) => state.userData);

  const singlePost = async () => {
    const response = await fetch(`http://127.0.0.1:5000/post/${id}`);
    const resData = await response.json();
    setDetail(resData.results);

    console.log("post detailsis user name ", detail.comment);
  };

  const deleteCommentApi = async (postId, cmtId, event) => {
    event.stopPropagation();
    const deleComment = await fetch(
      `http://127.0.0.1:5000/post/comment/delete/${postId}`,
      {
        method: "POST",
        body: JSON.stringify({ commentId: cmtId }),
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${userData.token}`,
        },
      }
    );
    const resData = deleComment.json();
    console.log("delete comment", resData);
    singlePost();
  };

  const toggleLikeApi = async (id, page) => {
    if (page < 0) {
      return;
    } else {
      const postLike = await fetch(
        `http://127.0.0.1:5000/post/like/toggle/${id}/${page}`
      );
      let resData = await postLike.json();
      console.log("add like is working", resData.results);
      singlePost();
    }
  };

  const commentApi = async (id) => {
    let response = await fetch(`http://127.0.0.1:5000/post/comment/${id}`, {
      method: "POST",
      body: JSON.stringify({ text: text }),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${userData.token}`,
      },
    });
    const resData = response.json();
    console.log("comments ", resData.results);

    singlePost();
  };

  useEffect(() => {
    singlePost();
  }, [id]);
  return (
    <>
      <div className="flex flex-col justify-center w-7/12 mx-auto my-8 p-10">
        <img
          src={`http://127.0.0.1:5000/uploads/${detail.image}`}
          className="w-full h-96 mx-auto my-2 rounded-md shadow-md"
        />
        <span className="text-slate-800 text-3xl font-serif my-4 text-center">
          {detail.title}
        </span>
        <p className="my-4 font-serif text-2xl text-slate-700">{detail.text}</p>
        <div className="mt-8">
          <div className="py-3pl-3">
            <div className="flex  cursor-pointer  items-center ">
              <span
                onClick={() => {
                  toggleLikeApi(detail._id, 1);
                }}
                className="text-blue-600 rounde:md shadow-md flex   p-2 hover:scale-110 hover:font-bold transition ease-in-out delay-150"
              >
                Like : {detail.like}
              </span>
              <span
                onClick={() => {
                  toggleLikeApi(detail._id, 0);
                }}
                className="rounde:md shadow-md mx-6  p-2 hover:scale-110 hover:font-bold transition ease-in-out delay-150 text-red-600  flex flex-col px-4 border-l-2 "
              >
                UnLike {detail.unLike}
              </span>
              <div>
                <div className="rounde:md shadow-md text-cyan-700 flex   p-2 hover:scale-110 hover:font-bold transition ease-in-out delay-150">
                  <span
                    className=" "
                    onClick={() => {
                      setShowMent(!showment);
                    }}
                  >
                    Comment
                  </span>
                  <span className="ml-1 ">
                    : {detail.comment ? detail.comment.length : 0}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <span className="text-xl text-slate-600 my-6">Comments</span>
            {comment && comment.length > 0 ? (
              comment.map((cmt) => (
                <div
                  className="bg-slate-100 p-4 shadow-md rounded-lg flex justify-between  my-4 relative"
                  key={cmt._id}
                >
                  <div className="flex">
                    <div className="mt-4 flex mr-2 ">
                      <HiOutlineUserCircle className="text-2xl text-slate-500" />
                    </div>
                    <div className="my-2 text-slate-600 flex flex-col mx-2">
                      <span className="text-black text-lg mt-1 mb-1 font-serif ">
                        {/* {detail.user ? detail.user.name : "None"} */}
                        {/* {detail.comment ? detail.comment.user.name : "none"} */}
                        {cmt.user.name}
                      </span>
                      <p className="text-slate-600 text-md ml-5">{cmt.text}</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {userData.role.length ? (
                      <MdOutlineDelete
                        onClick={(event) =>
                          deleteCommentApi(detail._id, cmt._id, event)
                        }
                        className="text-2xl text-red-600 hover:text-red-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                      />
                    ) : null}
                    {/* <MdOutlineDelete
                      onClick={(event) =>
                        deleteCommentApi(detail._id, cmt._id, event)
                      }
                      className="text-2xl text-red-600 hover:text-red-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                    /> */}
                  </div>
                </div>
              ))
            ) : (
              <p className="my-4 text-slate-500">No comments available</p>
            )}
          </div>
        </div>
        {showment && (
          <div
            class="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 overflow-y-auto">
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <form class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class=" w-full">
                        <label
                          for="about"
                          class="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Comment
                        </label>
                        <div class="mt-2">
                          <textarea
                            id="about"
                            name="about"
                            rows="3"
                            required
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Enter Your Comment "
                            class="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => {
                        console.log("comment text ", text);
                        if (text) {
                          commentApi(detail._id);
                          //commentApi(detail._id, text);
                        }

                        setShowMent(!showment);
                      }}
                      class="items-center inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    >
                      <BsFillSendFill className="mr-2" /> Send
                    </button>
                    <button
                      type="reset"
                      onClick={() => setShowMent(!showment)}
                      class="hover:outline hover:outline-2  mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Details;
