import React, { useEffect, useState } from "react";
import { removeUser } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
function UserUi({ users, deleteUser, userApi }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);

  const banUser = () => {
    dispatch(removeUser(null));
    navigate("/register");
  };

  const { role, permit } = users;
  console.log("all permit is ", permit);
  let findUser = role.find((rol) => rol.name === "OWNER");

  let havePermit = permit.find((per) => (per.name = "CREATE"));

  const addOwnerApi = async (usrId) => {
    setLoading(true);
    const response = await fetch(
      `https://mnews-api.onrender.com/role/addroles/${usrId}`,
      {
        method: "POST",

        headers: {
          authorization: `Bearer ${userData.token}`,
        },
      }
    );

    let resData = response.json();
    if (resData.con) {
      setLoading(false);
    }

    toast(resData.message);
    userApi();
  };

  const removeOwerRole = async (usrId) => {
    setLoading(true);
    const response = await fetch(
      `https://mnews-api.onrender.com/role/removeroles/${usrId}`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${userData.token}`,
        },
      }
    );

    let resData = response.json();
    if (resData.con) {
      setLoading(false);
    }

    toast(resData.message);
    userApi();
  };

  useEffect(() => {
    userApi();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className=" flex flex-wrap">
        <div className="flex mx-2 flex-col font-serif  flex-wrap p-4 rounded-lg shadow-lg bg-slate-100 my-3">
          <span className="lg:text-2xl my-1 text-slate-600 font-bold">
            {users.name}
          </span>
          <span className=" my-1 text-slate-600">{users.email}</span>
          <span className=" my-1 text-slate-600">{users.phone}</span>
          <div className="flex my-1 text-slate-600">
            <h4 className="mr-2 ">User Roles : </h4>
            <span className="  text-red-600 font-serif font-bold">
              {role.length
                ? role.map((ro) => ro.name)
                : "This user has no role"}
            </span>
          </div>
          <div className="flex my-1 text-slate-600">
            <h4 className="mr-2 ">User Permits : </h4>
            <div className=" text-red-600 font-serif font-bold flex">
              {permit.length
                ? permit.map((pr) => <p className="">{pr.name + "  |  "} </p>)
                : "This user no have permit"}
            </div>
          </div>

          <span className=" my-1 text-slate-600">
            {new Date(users.create).toLocaleDateString() +
              " ( " +
              new Date(users.create).toLocaleTimeString() +
              " ) "}
          </span>
          <div className=" mt-2  flex justify-around">
            {users.role.length === 0 ? (
              <>
                <button
                  onClick={() => addOwnerApi(users._id)}
                  className="lg:text-sm bg-[#1f30c9] p-2 text-white rounded-sm shadow-sm   hover:bg-[#4a57c9]"
                >
                  {loading && (
                    <ClipLoader
                      color={"#fdfdff"}
                      loading={loading}
                      size={15}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                      className="mx-1"
                    />
                  )}
                  Add Ower Role
                </button>
                {/* <button className="lg:text-sm mx-3 bg-cyan-700 p-2 text-white rounded-sm shadow-sm  hover:bg-cyan-600">
                  Add Manager Role
                </button> */}
                <button
                  className="lg:text-sm  bg-[#a71616] mx-3 p-2 text-white rounded-sm shadow-sm   hover:bg-[#f14b4b]"
                  onClick={() => {
                    deleteUser(users._id);
                  }}
                >
                  Ban User
                </button>
              </>
            ) : null}
            {findUser ? (
              <>
                <button
                  onClick={() => removeOwerRole(users._id)}
                  className="lg:text-sm  bg-[#a71616] mx-3 p-2 text-white rounded-sm shadow-sm   hover:bg-[#f14b4b]"
                >
                  {loading1 && (
                    <ClipLoader
                      color={"#a71616"}
                      loading={loading1}
                      size={15}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                      className="mx-1"
                    />
                  )}
                  Remove Owner Role
                </button>
                {havePermit ? null : (
                  <button
                    className="lg:text-sm  bg-[#a71616] mx-3 p-2 text-white rounded-sm shadow-sm   hover:bg-[#f14b4b]"
                    onClick={() => {
                      deleteUser(users._id);
                    }}
                  >
                    Ban User
                  </button>
                )}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserUi;
