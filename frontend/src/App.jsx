import React from "react";

import "./App.css";
import Nav from "./components/Nav/Nav";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GuardRouter from "./components/GuardRouter";
import FallBack from "./components/FallBack";
import Admin from "./components/AdminPanel/Admin";
import AllCategory from "./components/AdminPanel/Category/AllCategory";
import EditCategory from "./components/AdminPanel/Category/EditCategory";
import CreateCategory from "./components/AdminPanel/Category/CreateCategory";
import UserALL from "./components/AdminPanel/User/UserALL";
import MainPage from "./components/Mainpage/MainPage";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <GuardRouter>
                <Home />
              </GuardRouter>
            }
          />
          <Route
            path="/admin"
            element={
              <GuardRouter>
                <Admin />
              </GuardRouter>
            }
          >
            <Route path="category">
              <Route path="all" element={<AllCategory />} />
              <Route path="create" element={<CreateCategory />} />
              <Route path="edit/:id" element={<EditCategory />} />
            </Route>
            <Route path="user">
              <Route path="all" element={<UserALL />} />
            </Route>
          </Route>
          <Route path="*" element={<FallBack />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
