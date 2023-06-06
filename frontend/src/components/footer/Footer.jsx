import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="p-6 my-6">
        <span className="text-3xl font-sans font-bold lg:ml-36">Lets Talk</span>
        <div className="flex justify-evenly">
          <div className="lg:w-1/3 mt-4">
            <p className="text-slate-500 my-3 mb-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
              quaerat assumenda perferendis molestiae provident non sunt
              sapiente odit enim modi cupiditate, sequi dolorem architecto quae.
              Beatae dicta laudantium commodi. Consectetur quas atque ut
              aspernatur consequuntur ipsam rerum amet, laboriosam voluptas.
            </p>
            <Link
              to="/about"
              className="p-3 my-6 hover:bg-cyan-500 bg-cyan-600 text-white rounded-md shadow-sm "
            >
              Go To About Page
            </Link>
          </div>
          <div className="lg:w-4/12 mt-4">
            <div>
              <div className="my-2">
                <span className="mx-4 text-slate-500">Email</span>
                <span className="mx-4 text-cyan-500">mmnews@gmailcom</span>
              </div>
              <div className="my-2">
                <span className="mx-4 text-slate-500">Phone</span>
                <span className="mx-4 text-cyan-500">(+95) 956265804</span>
              </div>
              <div className="my-2">
                <span className="mx-4 text-slate-500">Address</span>
                <span className="mx-4 text-cyan-600">
                  No.(124),taw win street,Botataung township,Yangon, Myanmar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <div className="text-slate-600 font-serif text-lg font-bold">
          &copy;<span id="year"> </span>
          <span> MNNEWS. All rights reserved.</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
