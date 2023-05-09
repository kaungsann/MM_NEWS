import { combineReducers } from "redux";

const initialData = {
  title: "This is a M NEWS WEBSUTE",
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
      return (state = payload);
    case "userRemove":
      return (state = payload);
    default:
      return state;
  }
};

const reducers = combineReducers({
  textData: textDataReducers,
  userData: userReducers,
});

export default reducers;
