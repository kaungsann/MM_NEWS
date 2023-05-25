import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";
function PostAll() {
  const [post, setPost] = useState([]);
  const userData = useSelector((state) => state.userData);
  const postApi = async () => {
    const response = await fetch("http://127.0.0.1:5000/post/");
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
  }, []);
  return (
    <>
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
