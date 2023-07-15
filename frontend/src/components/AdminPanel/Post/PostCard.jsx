import React from "react";

import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
function PostCard(props) {
  const { postCard, deletePost } = props;

  const { user, category } = postCard;
  console.log("post card is ", postCard);

  return (
    <>
      <div className="  w-72 h-96 my-4 ml-8 first-line p-3 h-auto bg-white shadow-lg rounded-lg">
        <div className="flex justify-between mb-2">
          <span className="text-slate-400 mb-2">
            {/* Post By : {user.name || "N/A"} */}
            Post By : {user.name}
          </span>
        </div>
        <img
          src={`https://mnews-api.onrender.com/uploads/${postCard.image}`}
          className=" h-32 w-full mb-2 rounded-sm shadow-sm"
        />

        <span className="text-slate-700 ">{postCard.title}</span>
        <p className="text-sm  overflow-y-hidden overflow-ellipsis  mt-2 ">
          {postCard.text.substring(0, 30)}
        </p>
        <div>
          <Link
            className=" text-slate-400 mb-2"
            to={`/postdetail/${postCard._id}`}
          >
            See more{" "}
          </Link>
        </div>
        <span className="text-sm">
          {" "}
          {new Date(postCard.create).toLocaleDateString() +
            " ( " +
            new Date(postCard.create).toLocaleTimeString() +
            " ) "}
        </span>
        <div className="flex justify-around bg-slate-300 p-3">
          <Link to={`/admin/posts/edit/${postCard._id}`}>
            <FiEdit className="lg:text-2xl text-[#0891b2] hover:text-cyan-500" />
          </Link>
          <Link>
            <AiOutlineDelete
              className="lg:text-2xl text-[#b91c1c] hover:text-red-400"
              onClick={() => deletePost(postCard._id)}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default PostCard;
