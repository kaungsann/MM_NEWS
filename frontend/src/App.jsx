import React from "react";

import "./App.css";
import Nav from "./components/Nav/Nav";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GuardRouter from "./components/GuardRouter";
import FallBack from "./components/FallBack";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <GuardRouter>
                <Home />
              </GuardRouter>
            }
          />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
