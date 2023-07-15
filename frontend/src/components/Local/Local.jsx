import React, { useEffect, useState } from "react";

import HotNews from "../reusedCard/HotNews";

import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import HashLoader from "react-spinners/HashLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Local() {
  const [hotnews, setHotNews] = useState([]);
  const [main, setMianCard] = useState([]);
  const [loading, setloading] = useState(false);
  const userData = useSelector((state) => state.userData);
  const HotNewsApi = async () => {
    //old id   "https://mnews-api.onrender.com/post/bytag/6474a42c5203d3b8df88f18a"
    const response = await fetch(
      "https://mnews-api.onrender.com/post/bytag/64b2761698ffc76bf3e7e5d9"
    );
    setloading(false);
    const resData = await response.json();
    setHotNews(resData.results);
    setMianCard(resData.results[0]);
  };

  const toggleLikeApi = async (id, page) => {
    if (page < 0) {
      return;
    } else {
      const postLike = await fetch(
        `https://mnews-api.onrender.com/post/like/toggle/${id}/${page}`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${userData.token}`,
          },
        }
      );
      let resData = await postLike.json();
      toast(resData.message);
      HotNewsApi();
    }
  };

  const commentApi = async (id, text) => {
    let comment = await fetch(
      `https://mnews-api.onrender.com/post/comment/${id}`,
      {
        method: "POST",

        body: JSON.stringify({ text: text }),
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${userData.token}`,
        },
      }
    );
    const resData = await comment.json();

    HotNewsApi();
  };

  useEffect(() => {
    setloading(true);
    HotNewsApi();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="text-2xl font-serif my-4 text-center">Local News</div>

      {!loading && (
        <div className="w-10/12  p-3 mx-auto flex flex-wrap">
          <div className="w-full  flex">
            <div className="w-1/2 ">
              <img
                src={`https://mnews-api.onrender.com/uploads/${main.image}`}
                className=" rounded-lg shadow-md  h-64 w-4/5"
              />
            </div>

            <div className="w-1/2">
              <span className="text-slate-500 font-sans my-1 ">
                {new Date(main.create).toLocaleDateString()}
              </span>
              <div className="w-8/12">
                <h3 className="text-3xl  font-serif  mb-8">{main.title}</h3>
                {/* <p className="text-slate-600 my-2">{main.text}</p> */}
                <Link
                  to={`/postdetail/${main._id}`}
                  className="text-slate-200 p-3 bg-blue-600 m hover:bg-blue-500"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="h-0.5 bg-slate-300  my-4 w-full"></div>
          <div className=" font-serif text-[#343a40] my-6">
            <h3 className="text-3xl mb-3">Latest News</h3>
            <div className=" flex flex-wrap justify-evenly ">
              {hotnews.length > 0 &&
                hotnews.map((hot) => (
                  <HotNews
                    key={hot._id}
                    hotCard={hot}
                    addLike={toggleLikeApi}
                    comments={commentApi}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className=" fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20">
          <HashLoader
            color="#4679e6"
            cssOverride={{}}
            loading
            size={50}
            speedMultiplier={1}
          />
        </div>
      )}
    </>
  );
}

export default Local;
