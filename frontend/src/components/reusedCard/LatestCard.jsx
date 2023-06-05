import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { TfiCommentAlt } from "react-icons/tfi";
import { BsFillSendFill } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function LatestCard({ card, addLike, comment }) {
  const [showment, setShowMent] = useState(false);
  const [text, setText] = useState("");
  const userData = useSelector((state) => state.userData);

  // const disablelike = {
  //   pointerEvents: isDisable && "none",
  // };
  // const disLikes = {
  //   pointerEvents: disLike && "none",
  // };
  return (
    <div className="w-64  h-96 p-3 my-8 cursor-pointer ">
      <img
        src={`http://127.0.0.1:5000/uploads/${card.image}`}
        className="w-full h-44  rounded-md shadow-md "
      />
      <div className="my-2">
        <span className="text-slate-400 font-sans my-1 text-sm ">
          {new Date(card.create).toLocaleDateString()}
        </span>
        <h3 className="text-lg text-slate-800 mb-2">{card.title}</h3>
        <p className="text-sm font-serif text-slate-600 overflow-hidden">
          {card.text.substring(0, 65)}
        </p>
        <Link to={`/postdetail/${card._id}`} className="text-slate-400">
          see more
        </Link>
        <div className=" flex  bg-slate-100 flex-col justify-center mt-3">
          <div className="flex">
            <div className="flex items-center">
              <AiOutlineLike
                onClick={() => {
                  addLike(card._id, 1);
                }}
                className="text-2xl  text-blue-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
              />
              <span className="mx-1 text-slate-600">{card.like}</span>
            </div>
            <div className="flex items-center mx-6">
              <AiOutlineDislike
                onClick={() => {
                  addLike(card._id, 0);
                }}
                className="text-2xl  text-blue-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
              />
              <span className="mx-1 text-slate-600">{card.unLike}</span>
            </div>
            <Link
              className="flex items-center "
              onClick={() => setShowMent(!showment)}
            >
              <TfiCommentAlt className="text-xl  text-blue-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" />
              <span className="mx-1 text-slate-600">{card.comment.length}</span>
            </Link>
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
                            comment(card._id, text);
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
        </div>
      </div>
    </div>
  );
}