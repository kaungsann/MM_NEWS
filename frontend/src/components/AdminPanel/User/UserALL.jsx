import React, { useEffect, useState } from "react";
import UserUi from "./UserUi";
import { useSelector } from "react-redux";

function UserALL() {
  const [user, setUser] = useState([]);
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
    if (resData) {
      toast(resData);
    }
  };
  const userApi = async () => {
    const response = await fetch("http://127.0.0.1:5000/user/");
    const resData = await response.json();
    setUser(resData.results);
  };
  useEffect(() => {
    userApi();
  }, []);
  return (
    <>
      <h3 className="mx-3 text-xl font-serif">User ALL</h3>

      <div className="flex flex-wrap">
        {user.length > 0 &&
          user.map((user) => (
            <UserUi key={user._id} users={user} deleteUser={userDeleteApi} />
          ))}
      </div>
    </>
  );
}

export default UserALL;
