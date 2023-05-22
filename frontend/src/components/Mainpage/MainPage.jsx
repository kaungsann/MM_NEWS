import React, { useEffect, useRef } from "react";
import short from "../img/office.mp4";
import "./MainPage.module.css";
import { Link } from "react-router-dom";
function MainPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.loop = true;
      videoElement.play();
    }

    return () => {
      if (videoElement) {
        videoElement.loop = false;
        videoElement.pause();
      }
    };
  }, []);
  return (
    <div>
      <div className="video-container   w-full">
        <video
          src={short}
          type="video/mp4"
          loop
          autoplay
          ref={videoRef}
          className="w-full fixed"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      t
      <div className="main-conten  p-4 absolute ml-32 mt-20">
        <div className="opacity-background  font-serif "></div>
        <div className="w-96 flex flex-wrap cursor-pointer">
          <span className=" font-medium  text-3xl mb-3 text-slate-100">
            Welcome to MM NEWS
          </span>
          <span className="  text-xl text-slate-100">
            Breaking News, In-Depth Analysis, and Timely Updates: Your Source
            for Reliable News and Current Affairs
          </span>
          <div className="mt-6">
            <Link
              to="/register"
              className="bg-cyan-700 text-white p-3 text-sm rounded-sm cursor-progress"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="mx-4 bg-cyan-700 p-3 text-sm text-white rounded-sm cursor-progress"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
