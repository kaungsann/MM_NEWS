import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TagCard from "./TagCard";

function TagAll() {
  let [tag, setTag] = useState([]);
  let userData = useSelector((state) => state.userData);

  const tagApI = async () => {
    const response = await fetch("http://127.0.0.1:5000/tag/");
    let resData = await response.json();
    if (resData.con) {
      setTag(resData.results);
    } else {
    }
  };
  const deleteTag = async (id) => {
    const deleteCard = await fetch(`http://127.0.0.1:5000/tag/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${userData.token}`,
      },
    });
    let resData = await deleteCard.json();
    tagApI();
  };
  useEffect(() => {
    tagApI();
  }, []);

  return (
    <>
      <div className="mx-3 text-xl font-serif ">TagAll</div>
      <div className="flex flex-wrap">
        {tag.length > 0 &&
          tag.map((tg) => (
            <TagCard key={tg._id} tagCard={tg} deleteCard={deleteTag} />
          ))}
      </div>
    </>
  );
}

export default TagAll;
