import React from "react";
import { useSelector } from "react-redux";
import biden from "../img/biden.jpg";
import un from "../img/un.jpeg";
import bomb from "../img/bomb.jpeg";
import china from "../img/strike.jpeg";

import "./Home.css";
function Home() {
  const siteData = useSelector((state) => state.textData);
  return (
    <>
      <h2 className=" lg:text-2xl text-center mt-4 font-serif">
        Welcome to M_NEWS.COM
      </h2>
      <div className="flex lg:mt-8 lg:w-10/12 lg:mx-auto ">
        <div className="lg:w-3/6  lg:h-auto imageBiden ">
          <img src={biden} className="w-full h-full" />

          <div className="text-overlay">
            <span className="bidenText">
              we will continue to impose further costs on the military and its
              supporters.
            </span>
          </div>
        </div>
        <div className="lg:w-72 lg:h-auto lg:flex lg:flex-col ">
          <div className="lg:mx-1 unbox w-full lg:h-auto">
            <img src={un} className="lg:w-72" />
            <div className="unText">
              <span className="lg:text-lg text-white font-bold">
                Myanmar:UN condemns deadly military airstrike on crowd of
                civilians
              </span>
            </div>
          </div>
          <div className="lg:mx-1 unbox lg:w-full lg:my-1">
            <img src={bomb} className="lg:w-72 lg:h-auto" />
            <div className="unText">
              <span className="lg:text-lg text-white font-bold">
                Israeli strikes on Gaza kill top militants and 10 civilians
              </span>
            </div>
          </div>
          <div className="lg:mx-1 unbox w-full lg:my-1">
            <img src={china} className="lg:w-72 lg:h-auto" />
            <div className="unText">
              <span className="lg:text-lg text-white font-bold">
                China Military Exercises around Taiwan civilians
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
