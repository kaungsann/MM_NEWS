import React from "react";
import space from "../img/spacex.jpg";
import robot from "../img/robot.jpeg";
import meta from "../img/meta.jpeg";
import drone from "../img/drone.jpeg";
import tesla from "../img/tesla.jpeg";
import hel from "../img/hei.jpg";
import ai from "../img/ai.jpeg";
import Footer from "../footer/Footer";
function Home() {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <h1>Welcome to MMNews</h1>

        <div class="flex mb-4 p-3">
          <div class="w-3/5  relative">
            <img src={space} />
            <div className=" lg:w-72 p-4 absolute top-0 bg-[#F5F5F5]">
              <div className="text-slate-500 font-sans">0ct . 4 . 2023</div>
              <span className="lg:text-2xl font-serif font-bold">
                Space X to take worlds first space tourist on trips on the moon
              </span>
            </div>
            <span className="p-2 text-sm bg-[#e40d0d] text-white font-serif font-bold absolute right-0 top-0 rounded-sm shadow-lg">
              Breaking News
            </span>
          </div>
          <div class="w-2/5 flex flex-wrap  justify-between ">
            <div className="mx-6 flex bg-white p-4">
              <img src={robot} className="lg:h-32 lg:w-36" />
              <div className="mx-6">
                <span className="text-slate-500 font-sans">0ct . 4 . 2023</span>
                <p className="text-sm font-sans font-bold text-slate-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                  consectetur adipisicing elit. Qui consectetur adipisicing
                  elit. Qui
                </p>
                <span className="text-slate-500 text-sm">MORE</span>
              </div>
            </div>
            <div className="mx-6 flex bg-white p-4 my-1">
              <img src={tesla} className="lg:h-32 lg:w-36" />
              <div className="mx-6">
                <span className="text-slate-500 font-sans">0ct . 4 . 2023</span>
                <p className="text-sm font-sans font-bold text-slate-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                  consectetur adipisicing elit. Qui
                </p>
                <span className="text-slate-500 text-sm ">MORE</span>
              </div>
            </div>
            <div className="mx-6 flex bg-white p-4">
              <img src={meta} className="lg:h-32 lg:w-36" />
              <div className="mx-6">
                <span className="text-slate-500 font-sans">0ct . 4 . 2023</span>
                <p className="text-sm font-sans font-bold text-slate-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                  consectetur adipisicing elit. Qui
                </p>
                <span className="text-slate-500 text-sm">MORE</span>
              </div>
            </div>
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
              <div className="p-4 bg-slate-50 my-3">
                <span className="text-slate-500 font-sans">0ct . 4 . 2023</span>
                <p className="text-sm font-sans font-medium  text-slate-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere ad, assumenda eum voluptas cum corrupti incidunt
                  dolorum totam deleniti. Dolore.
                </p>
              </div>
              <div className="p-4 bg-slate-50 my-3">
                <span className="text-slate-500 font-sans">0ct . 4 . 2023</span>
                <p className="text-sm font-sans font-medium  text-slate-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere ad, assumenda eum voluptas cum corrupti incidunt
                  dolorum totam deleniti. Dolore.
                </p>
              </div>
              <div className="p-4 bg-slate-50 my-3">
                <span className="text-slate-500 font-sans">0ct . 4 . 2023</span>
                <p className="text-sm font-sans font-medium  text-slate-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere ad, assumenda eum voluptas cum corrupti incidunt
                  dolorum totam deleniti. Dolore.
                </p>
              </div>
              <div className="p-4 bg-slate-50 my-3">
                <span className="text-slate-500 font-sans">0ct . 4 . 2023</span>
                <p className="text-sm font-sans font-medium  text-slate-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere ad, assumenda eum voluptas cum corrupti incidunt
                  dolorum totam deleniti. Dolore.
                </p>
              </div>
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
              <div className="w-3/5 relative">
                <img src={ai} className="w-full h-full" />
                <span className="absolute bottom-0 text-slate-300 font-serif font-bold px-3 w-42 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <div className="w-2/5 mx-4 relative">
                <img src={hel} className="h-full" />
                <span className="absolute bottom-0 text-slate-300 font-serif font-bold px-3 w-42 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
            <div className="h-80 w-full relative   ">
              <img src={drone} className="w-full h-full" />
              <span className="absolute bottom-0 text-slate-300 font-serif font-bold px-3 w-42 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
