import React, { useEffect, useState } from "react";
import UserUi from "./UserUi";
import { useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";

function UserALL() {
  const [user, setUser] = useState([]);
  const [userLoading, setUserLoading] = useState(false);
  const userData = useSelector((state) => state.userData);

  const userDeleteApi = async (id) => {
    const response = await fetch(`http://127.0.0.1:5000/user/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${userData.token}`,
      },
    });
    const resData = await response.json();
    userApi();
    if (resData.con) {
      toast(resData);
    }
  };
  const userApi = async () => {
    const response = await fetch("http://127.0.0.1:5000/user");
    const resData = await response.json();
    setUser(resData.results);
    setUserLoading(false);
  };
  useEffect(() => {
    userApi();
  }, []);
  return (
    <>
      <h3 className="mx-3 text-xl font-serif">User ALL</h3>
      {userLoading && (
        <div className=" fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20">
          <ClipLoader
            color="#4679e6"
            loading={userLoading}
            size={50}
            speedMultiplier={1}
          />
        </div>
      )}
      {!userLoading && (
        <div className="flex flex-wrap">
          {user.length > 0 &&
            user.map((user) => (
              <UserUi
                key={user._id}
                users={user}
                deleteUser={userDeleteApi}
                userApi={userApi}
              />
            ))}
        </div>
      )}
    </>
  );
}

export default UserALL;
