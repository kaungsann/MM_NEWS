import { combineReducers } from "redux";

const initialData = {
  title: "This is a M NEWS WEBSUTE",
};
const localDb = "MMNews";

const getUser = () => {
  let haveUser = localStorage.getItem(localDb);
  return haveUser ? JSON.parse(haveUser) : [];
};

const saveUser = (user) => {
  localStorage.setItem(localDb, JSON.stringify(user));
};

const textDataReducers = (state = initialData, { type, payload }) => {
  switch (type) {
    case "add":
      return (state = payload);
    case "remove":
      return (state = {});
    default:
      return state;
  }
};

const userReducers = (state = null, { type, payload }) => {
  switch (type) {
    case "userAdd":
      //return (state = payload);
      saveUser(payload);
      state = getUser();
      return state;
    case "userRemove":
      return (state = payload);
    default:
      let haveUser = localStorage.getItem(localDb);
      return haveUser ? (state = getUser()) : state;
    // state = getUser();
    // return state;
  }
};

const reducers = combineReducers({
  textData: textDataReducers,
  userData: userReducers,
});

export default reducers;
