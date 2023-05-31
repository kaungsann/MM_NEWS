import React, { useEffect, useState } from "react";
import robot from "../img/robot.jpeg";
import HotNews from "../reusedCard/HotNews";
function Local() {
  const [hotnews, setHotNews] = useState([]);
  const [main, setMianCard] = useState([]);

  const HotNewsApi = async () => {
    const response = await fetch(
      "http://127.0.0.1:5000/post/bytag/6474a42c5203d3b8df88f18a"
    );
    const resData = await response.json();
    setHotNews(resData.results.splice(0, 5));
    setMianCard(resData.results[0]);
    console.log("main card is ", main);
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
              {new Date(main.create).toLocaleDateString() +
                " ( " +
                new Date(main.create).toLocaleTimeString() +
                " ) "}
            </span>
            <div className="w-8/12">
              <h3 className="text-3xl my-3 font-serif ">{main.title}</h3>
              <p className="text-slate-600 my-2">{main.text}</p>
              <div className="text-slate-400">See More</div>
            </div>
          </div>
        </div>
        <div className=" font-serif text-[#343a40] my-6">
          <h3 className="text-3xl mb-3">Latest News</h3>
          <div className=" flex flex-wrap justify-between ">
            {hotnews.length > 0 &&
              hotnews.map((hot) => <HotNews key={hot._id} hotCard={hot} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Local;
