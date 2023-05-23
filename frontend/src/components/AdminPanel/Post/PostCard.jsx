import React from "react";
import img from "../../img/biden.jpg";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
function PostCard() {
  return (
    <>
      <div className="  w-72 ml-8 first-line p-3 h-84 bg-white shadow-lg rounded-lg">
        <img src={img} className=" h-40 w-full mb-2 rounded-sm shadow-sm" />
        <span className="text-slate-700 ">Post Name</span>
        <p className="text-sm  overflow-y-hidden overflow-ellipsis h-24 mt-2 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          saepe delectus? Delectus recusandae facilis ex fuga a, odit eum. Autem
          molestiae soluta minima delectus assumenda non odio velit, rerum nam.
          Cupiditate, magni at corrupti reiciendis molestiae, eligendi id
          perferendis obcaecati, praesentium cum assumenda. Deleniti, error
          ipsam, fuga facilis dolor in placeat voluptatibus, non architecto eum
          recusandae accusamus cupiditate? Fuga quo laudantium aperiam nam autem
          cumque mollitia nostrum maxime est nulla nesciunt nihil sed
          praesentium laboriosam labore quaerat amet aliquid, fugit quos.
          Tempora deleniti quae assumenda ducimus? Iusto dignissimos cum optio
          vel quasi soluta dolore enim. Quas omnis doloremque porro temporibus?
        </p>
        <div>
          <button className=" text-slate-400 mb-2">See more </button>
        </div>
        <div className="flex justify-around bg-slate-300 p-3">
          <Link>
            <FiEdit className="lg:text-2xl text-[#0891b2] hover:text-cyan-500" />
          </Link>
          <Link>
            <AiOutlineDelete className="lg:text-2xl text-[#b91c1c] hover:text-red-400" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default PostCard;
