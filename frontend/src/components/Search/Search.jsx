import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
function Search() {
  const [searchItems, setSearchItems] = useState([]);
  const [posts, setPosts] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    let postAll = async () => {
      const response = await fetch("http://127.0.0.1:5000/post");
      const postData = await response.json();
      setPosts(postData.results);
    };
    postAll();
  }, []);
  return (
    <div className="lg:w-2/5 my-8 mx-auto absolute top-16 z-10 left-0 right-0 flex ">
      <label className="relative block w-full">
        <span className="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <span>
            <AiOutlineSearch class="h-5 w-5 fill-slate-300" />
          </span>
        </span>
        <input
          className="mb-0.5 placeholder:italic placeholder:text-slate-400 block w-full bg-white  border border-slate-300 rounded-t-md py-2 pl-8 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for news..."
          type="text"
          name="search"
          ref={inputRef}
          onChange={(e) => setSearchItems(e.target.value.toLowerCase())}
        />

        <div className="bg-white h-auto w-full flex flex-wrap ">
          {posts
            .filter((items) => {
              return items.title.toLowerCase().includes(searchItems);
            })
            .map((product) => {
              if (inputRef.current.value === "") {
                return;
              }
              inputRef.current.innerHTML = "";
              return (
                <Link
                  to={`/postdetail/${product._id}`}
                  key={product.id}
                  className="w-full py-3 px-3 hover:bg-slate-200  border-solid border-2 "
                >
                  <div className="pb-2 lg:text-sm text-slate-600 w-full">
                    {product.title}
                  </div>
                  {/* <div className=" w-full h-0.5 bg-slate-400"></div> */}
                </Link>
              );
            })}
        </div>
      </label>
    </div>
  );
}

export default Search;
