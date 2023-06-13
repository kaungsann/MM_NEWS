import React, { useEffect, useState } from "react";

import Footer from "../footer/Footer";
import SlideCard from "../reusedCard/SlideCard";
import RightSide from "../reusedCard/RightSide";
import { Link, useNavigate } from "react-router-dom";
import Search from "../Search/Search";

function Home() {
  const [technology, setTechnology] = useState([]);
  const [main, setMain] = useState([]);
  const [side, setSide] = useState([]);
  const [show, setShow] = useState([]);
  const [show1, setShow1] = useState([]);
  const [show2, setShow2] = useState([]);

  const techApi = async () => {
    let response = await fetch(
      "http://127.0.0.1:5000/post/bytag/6479d7cce8a3b6f7db7fbf62"
    );
    let resData = await response.json();
    console.log("res data ", resData.results);
    setShow(resData.results[4]);
    setShow1(resData.results[5]);
    setShow2(resData.results[6]);
    setMain(resData.results[0]);

    setSide(resData.results.slice(1, 4));
    setTechnology(resData.results.splice(0, 5));
  };

  useEffect(() => {
    techApi();
  }, []);
  return (
    <>
      <Search />
      <div className="w-10/12 mx-auto mt-16">
        <h1>Welcome to MMNews</h1>

        <div class="flex mb-4 p-3">
          <Link
            to={`/postdetail/${main._id}`}
            className="w-3/5  relative  hover:opacity-75  border-solid border-2 "
          >
            <img src={`http://127.0.0.1:5000/uploads/${main.image}`} />
            <div className=" lg:w-72 p-4 absolute top-0 bg-[#F5F5F5]">
              <div className="text-slate-500 font-sans">
                {new Date(main.create).toLocaleDateString()}
              </div>
              <span className="lg:text-2xl font-serif font-bold">
                {main.title}
              </span>
            </div>
            <span className="p-2 text-sm bg-[#e40d0d] text-white font-serif font-bold absolute right-0 top-0 rounded-sm shadow-lg">
              Breaking News
            </span>
          </Link>
          <div class="w-2/5 flex flex-wrap  justify-between ">
            {side.length > 0 &&
              side.map((sd) => <RightSide key={sd._id} card={sd} />)}
          </div>
        </div>

        <div className="flex bg-white p-3">
          <div className="w-2/5 px-3">
            {/* Most Popular */}
            <div className="text-slate-400 text-lg font-serif font-bold">
              MOST POPULAR
            </div>
            {/* popular news loop*/}
            <div className="flex flex-wrap justify-between p-3 ">
              {technology.length > 0 &&
                technology.map((th) => <SlideCard key={th._id} card={th} />)}
              {/* <div className="p-3 bg-slate-50 my-3">
                <span className="text-slate-500 font-sans">0ct . 4 . 2023</span>
                <p className="text-sm font-sans font-medium  text-slate-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere ad, assumenda eum voluptas cum corrupti incidunt
                  dolorum totam deleniti. Dolore.
                </p>
              </div> */}
            </div>
          </div>
          <div className="w-3/5  flex flex-wrap px-3">
            <div className="flex w-full h-60   mb-3">
              <Link
                to={`/postdetail/${show._id}`}
                className="w-3/5 relative hover:opacity-75  "
              >
                <img
                  src={`http://127.0.0.1:5000/uploads/${show.image}`}
                  className="w-full h-full"
                />
                <span className="absolute bottom-0 text-slate-300 font-serif font-bold px-3 w-42 ">
                  {show.title}
                </span>
              </Link>
              <Link
                to={`/postdetail/${show1._id}`}
                className="w-2/5 mx-4 relative   hover:opacity-75    "
              >
                <img
                  src={`http://127.0.0.1:5000/uploads/${show1.image}`}
                  className="h-full"
                />
                <span className="absolute bottom-0 text-slate-300 font-serif font-bold px-3 w-42 ">
                  {show1.title}
                </span>
              </Link>
            </div>
            <Link
              className="h-80 w-full relative   hover:opacity-75   border-solid border-2  "
              to={`/postdetail/${show2._id}`}
            >
              <img
                src={`http://127.0.0.1:5000/uploads/${show2.image}`}
                className="w-full h-full hover:bg-slate-700"
              />
              <span className="absolute bottom-0 text-slate-300 font-serif font-bold px-3 w-42 ">
                {show2.title}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
