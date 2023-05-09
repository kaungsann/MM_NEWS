import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const siteData = useSelector((state) => state.textData);
  return (
    <div className="text-5xl mt-5 text-center">
      <h1>hello Home {siteData.title}</h1>
    </div>
  );
}

export default Home;
