import React, { useEffect, useState } from "react";
import robot from "../img/robot.jpeg";
import meta from "../img/meta.jpeg";
import drone from "../img/drone.jpeg";
import tesla from "../img/tesla.jpeg";
import hel from "../img/hei.jpg";
import ai from "../img/ai.jpeg";
import LatestCard from "../reusedCard/LatestCard";
import SportsCard from "../reusedCard/SportsCard";
function Internation() {
  const [latest, setLatest] = useState([]);
  const [sports, setSports] = useState([]);
  const [card1, setCard1] = useState([]);
  const [card2, setCard2] = useState([]);
  const [card3, setCard3] = useState([]);
  const [card4, setCard4] = useState([]);
  const [card5, setCard5] = useState([]);
  const latestNewsApi = async () => {
    // latest News & international category
    let response = await fetch(
      "http://127.0.0.1:5000/post/bytag/646b9bf7c64b9ec668e9a6ad"
    );
    let resData = await response.json();
    console.log(resData.results);
    setLatest(resData.results);
    setCard1(resData.results[0]);
    setCard2(resData.results[1]);
    setCard3(resData.results[2]);
    setCard4(resData.results[3]);
    setCard5(resData.results[5]);
  };
  const sportsApi = async () => {
    const sports = await fetch(
      "http://127.0.0.1:5000/post/bytag/6477740ac8b3627821bcba50"
    );
    let resData = await sports.json();
    console.log("sports ", resData.results);
    setSports(resData.results);
  };
  useEffect(() => {
    latestNewsApi();
    sportsApi();
  }, []);
  return (
    <>
      <h1 className="text-2xl font-serif  my-2 text-center">
        Internation News
      </h1>
      <div className="w-11/12  mx-auto">
        <div className="flex ">
          <div className="w-1/4 p-3 relative flex flex-wrap justify-between">
            <div className="relative my-2">
              <img
                src={`http://127.0.0.1:5000/uploads/${card1.image}`}
                className="w-full h-auto"
              />
              <div className="absolute  left-0 bottom-0  font-serif p-3">
                <span className="text-white font-serif font-bold">
                  {card1.title}
                </span>
                {/* <p className="text-slate-100">{card1.text.substring(0, 0)}</p> */}
              </div>
            </div>
            <div className="relative">
              <img
                src={`http://127.0.0.1:5000/uploads/${card2.image}`}
                className="w-full"
              />
              <div className="absolute  left-0 bottom-0  font-serif p-3">
                <span className="text-white ont-serif font-bold">
                  {card2.title}
                </span>
                {/* <p className="text-slate-100">{card2.text.}</p> */}
              </div>
            </div>
          </div>
          <div className="w-2/4  p-3 flex justify-center">
            <div className="relative my-2">
              <img
                src={`http://127.0.0.1:5000/uploads/${card3.image}`}
                className="w-full h-full"
              />
              <div className="absolute  left-0 bottom-3 mb-4 font-serif p-3">
                <span className="text-white font-serif font-bold ">
                  {card3.title}
                </span>
                {/* <p className="text-slate-100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Inventore, earum?
                </p> */}
              </div>
            </div>
          </div>
          <div className="w-1/4 p-3 flex flex-wrap justify-between">
            <div className="relative my-2 h-1/2">
              <img
                src={`http://127.0.0.1:5000/uploads/${card4.image}`}
                className="w-full h-full"
              />
              <div className="absolute  left-0 bottom-0  font-serif p-3">
                <span className="text-white font-serif font-bold ">
                  {card4.title}
                </span>
                {/* <p className="text-slate-100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Inventore, earum?
                </p> */}
              </div>
            </div>
            <div className="relative h-1/2">
              <img
                src={`http://127.0.0.1:5000/uploads/${card5.image}`}
                className="w-full h-auto"
              />
              <div className="absolute  left-0 bottom-3  font-serif p-3">
                <span className="text-white font-serif font-bold">
                  {card5.title}
                </span>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-2xl mb-3">Sports News</h3>
        <div className="flex justify-between ">
          {sports.length > 0 &&
            sports.map((sp) => <SportsCard key={sp._id} sport={sp} />)}
        </div>
        <div className=" font-serif text-[#343a40] my-6">
          <h3 className="text-3xl mb-3">Latest News</h3>
          <div className=" flex flex-wrap justify-between ">
            {latest.length > 0 &&
              latest.map((lat) => <LatestCard key={lat._id} card={lat} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Internation;
