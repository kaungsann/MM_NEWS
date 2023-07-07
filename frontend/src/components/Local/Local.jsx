import React, { useEffect, useState } from "react";
import robot from "../img/robot.jpeg";
import HotNews from "../reusedCard/HotNews";
import Details from "../Details/Details";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Local() {
  const [hotnews, setHotNews] = useState([]);
  const [main, setMianCard] = useState([]);
  const userData = useSelector((state) => state.userData);
  const HotNewsApi = async () => {
    const response = await fetch(
      "http://127.0.0.1:5000/post/bytag/6474a42c5203d3b8df88f18a"
    );
    const resData = await response.json();
    setHotNews(resData.results);
    setMianCard(resData.results[0]);
  };
  const toggleLikeApi = async (id, page) => {
    if (page < 0) {
      return;
    } else {
      const postLike = await fetch(
        `http://127.0.0.1:5000/post/like/toggle/${id}/${page}`
      );
      let resData = await postLike.json();

      HotNewsApi();
    }
  };

  const commentApi = async (id, text) => {
    let comment = await fetch(`http://127.0.0.1:5000/post/comment/${id}`, {
      method: "POST",

      body: JSON.stringify({ text: text }),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${userData.token}`,
      },
    });
    const resData = await comment.json();

    HotNewsApi();
  };

  useEffect(() => {
    HotNewsApi();
  }, []);

  return (
    <>
      <div className="text-2xl font-serif my-4 text-center">Local News</div>
      <div className="w-10/12  p-3 mx-auto flex flex-wrap">
        <div className="w-full  flex">
          <div className="w-1/2 ">
            <img
              src={`http://127.0.0.1:5000/uploads/${main.image}`}
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
    </>
  );
}

export default Local;
