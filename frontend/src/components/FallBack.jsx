import React from "react";
import { Link } from "react-router-dom";

function FallBack() {
  return (
    <>
      <h1>Not Found Pages</h1>
      <Link to="/register">Go Back</Link>
    </>
  );
}

export default FallBack;
