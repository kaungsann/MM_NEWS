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
      <h2 className=" lg:text-2xl text-center mt-4 font-serif p-6 ">
        Welcome to M_NEWS
      </h2>
      <div className=" lg:mt-8 lg:w-9/12 lg:mx-auto cotainer flex justify-betweem ">
        <div className=" lg:w-3/4 ">
          <div className="grid grid-cols-3 gap-3  w-full">
            <div className="  imageBiden col-span-2 ">
              <img src={biden} className="w-full h-full" />
              <div className="text-overlay">
                <span className="bidenText">
                  we will continue to impose further costs on the military and
                  its supporters.
                </span>
              </div>
            </div>
            <div className=" grid grid-rows-2 col-span-1 bg-red-400 ">
              <div className=" unbox row-span-1 ">
                <img src={un} className="w-full h-full" />
                <div className="unText">
                  <span className="lg:text-lg text-white font-bold">
                    Myanmar:UN condemns deadly military airstrike on crowd of
                    civilians
                  </span>
                </div>
              </div>
              <div className=" unbox row-span-1  ">
                <img src={bomb} className="w-full h-full" />
                <div className="unText">
                  <span className="lg:text-lg text-white font-bold">
                    Israeli strikes on Gaza kill top militants and 10 civilians
                  </span>
                </div>
              </div>
              {/* <div className=" unbox w-full  h-auto">
                <img src={china} className="lg:w-full lg:h-auto" />
                <div className="unText">
                  <span className="lg:text-lg text-white font-bold">
                    China Military Exercises around Taiwan civilians
                  </span>
                </div>
              </div> */}
            </div>
          </div>
          <div className=" mt-4 w-full grid gap-4 grid-cols-4">
            <div className="lg:mx-1 card mx-2  ">
              <img src={un} className="w-full h-full" />
              <div className="unText">
                <span className="lg:text-sm text-white font-bold">
                  Myanmar:UN condemns deadly military airstrike on crowd of
                  civilians
                </span>
              </div>
            </div>
            <div className="lg:mx-1 card mx-2  ">
              <img src={un} className="w-full h-full" />
              <div className="unText">
                <span className="lg:text-sm text-white font-bold">
                  Myanmar:UN condemns deadly military airstrike on crowd of
                  civilians
                </span>
              </div>
            </div>
            <div className="lg:mx-1 card mx-2  ">
              <img src={un} className="w-full h-full" />
              <div className="unText">
                <span className="lg:text-sm text-white font-bold">
                  Myanmar:UN condemns deadly military airstrike on crowd of
                  civilians
                </span>
              </div>
            </div>
            <div className="lg:mx-1 card mx-2  ">
              <img src={un} className="w-full h-full" />
              <div className="unText">
                <span className="lg:text-sm text-white font-bold">
                  Myanmar:UN condemns deadly military airstrike on crowd of
                  civilians
                </span>
              </div>
            </div>
            <div className="lg:mx-1 card mx-2  ">
              <img src={un} className="w-full h-full" />
              <div className="unText">
                <span className="lg:text-sm text-white font-bold">
                  Myanmar:UN condemns deadly military airstrike on crowd of
                  civilians
                </span>
              </div>
            </div>
            <div className="lg:mx-1 card mx-2  ">
              <img src={un} className="w-full h-full" />
              <div className="unText">
                <span className="lg:text-sm text-white font-bold">
                  Myanmar:UN condemns deadly military airstrike on crowd of
                  civilians
                </span>
              </div>
            </div>
            <div className="lg:mx-1 card mx-2  ">
              <img src={un} className="w-full h-full" />
              <div className="unText">
                <span className="lg:text-sm text-white font-bold">
                  Myanmar:UN condemns deadly military airstrike on crowd of
                  civilians
                </span>
              </div>
            </div>
            <div className="lg:mx-1 card mx-2  ">
              <img src={un} className="w-full h-full" />
              <div className="unText">
                <span className="lg:text-sm text-white font-bold">
                  Myanmar:UN condemns deadly military airstrike on crowd of
                  civilians
                </span>
              </div>
            </div>
            <div className="lg:mx-1 card mx-2  ">
              <img src={un} className="w-full h-full" />
              <div className="unText">
                <span className="lg:text-sm text-white font-bold">
                  Myanmar:UN condemns deadly military airstrike on crowd of
                  civilians
                </span>
              </div>
            </div>
            <div className="lg:mx-1 card mx-2  ">
              <img src={un} className="w-full h-full" />
              <div className="unText">
                <span className="lg:text-sm text-white font-bold">
                  Myanmar:UN condemns deadly military airstrike on crowd of
                  civilians
                </span>
              </div>
            </div>
            <div className="lg:mx-1 card mx-2  ">
              <img src={un} className="w-full h-full" />
              <div className="unText">
                <span className="lg:text-sm text-white font-bold">
                  Myanmar:UN condemns deadly military airstrike on crowd of
                  civilians
                </span>
              </div>
            </div>
            <div className="lg:mx-1 card mx-2  ">
              <img src={un} className="w-full h-full" />
              <div className="unText">
                <span className="lg:text-sm text-white font-bold">
                  Myanmar:UN condemns deadly military airstrike on crowd of
                  civilians
                </span>
              </div>
            </div>
            <div className="lg:mx-1 card mx-2  ">
              <img src={un} className="w-full h-full" />
              <div className="unText">
                <span className="lg:text-sm text-white font-bold">
                  Myanmar:UN condemns deadly military airstrike on crowd of
                  civilians
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <h4>Top Stories</h4>
          <div className="flex flex-col text-2xl">
            <span>Whiscosin got what it deserve in loss to illnois</span>
            <span>For the top videos, a series of videos</span>
            <span>achieve your goal. Huffpost is another</span>
            <span>Huffpost utilizes web banners to post an</span>
            <span>What’s more? It also uses a sticky header to improve </span>
            <span> web banners to post an ad as part of its monetization</span>
            <span> Always opt for the best to help you</span>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Home;
