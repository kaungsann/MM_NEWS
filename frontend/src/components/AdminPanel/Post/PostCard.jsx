import React from "react";
import img from "../../img/biden.jpg";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
function PostCard(props) {
  const { postCard, deletePost } = props;
  const category = postCard.category || {};
  const user = postCard.user || {};
  // console.log(postCard);
  // const { user, category } = postCard;
  // console.log(user);
  // console.log(category);

  return (
    <>
      <div className="  w-72 ml-8 first-line p-3 h-auto bg-white shadow-lg rounded-lg">
        <div className="flex justify-between mb-2">
          <span className="text-slate-400 mb-2">
            Post By : {user.name || "N/A"}
          </span>
        </div>
        <img
          src={`http://127.0.0.1:5000/uploads/${postCard.image}`}
          className=" h-32 w-full mb-2 rounded-sm shadow-sm"
        />

        <span className="text-slate-700 ">{postCard.title}</span>
        <p className="text-sm  overflow-y-hidden overflow-ellipsis  mt-2 ">
          {postCard.text}
        </p>
        <div>
          <button className=" text-slate-400 mb-2">See more </button>
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
