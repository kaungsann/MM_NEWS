import React, { useEffect, useState } from "react";
import imag from "../img/biden.jpg";
import { useParams } from "react-router-dom";
import { AiTwotoneLike } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector } from "react-redux";
function Details() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const { comment } = detail;
  const userData = useSelector((state) => state.userData);
  const singlePost = async () => {
    const response = await fetch(`http://127.0.0.1:5000/post/${id}`);
    const resData = await response.json();
    setDetail(resData.results);

    console.log("post detailsis", resData.results);
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

  useEffect(() => {
    singlePost();
  }, [id]);
  return (
    <>
      <div className="flex flex-col justify-center w-10/12 mx-auto my-8 p-10">
        <img
          src={`http://127.0.0.1:5000/uploads/${detail.image}`}
          className="w-8/12 h-96 mx-auto my-2 rounded-md shadow-md"
        />
        <span className="text-slate-800 text-3xl font-serif my-4 text-center">
          {detail.title}
        </span>
        <p className="my-4 font-serif text-2xl text-slate-700">{detail.text}</p>
        <div className="">
          <div className="flex  cursor-pointer  items-center">
            <span className="text-blue-600">Like : {detail.like}</span>
            <span className="text-red-600 mx-6 flex flex-col">
              UnLike : {detail.unLike}
            </span>
          </div>
          <div className="mt-4">
            <div className="h-0.5 bg-slate-300 my-4"></div>
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
                    <div className="my-3 text-slate-600 flex flex-col mx-2">
                      <span className="text-slate-800 text-lg mt-1 mb-2 font-serif ">
                        {detail.user ? detail.user.name : "None"}
                      </span>
                      <p className="text-slate-600 text-lg">{cmt.text}</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <MdOutlineDelete
                      onClick={(event) =>
                        deleteCommentApi(detail._id, cmt._id, event)
                      }
                      className="text-2xl text-red-600 hover:text-red-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="my-4 text-slate-500">No comments available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
