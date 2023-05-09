import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function GuardRouter({ children }) {
  const userData = useSelector((state) => state.userData);
  if (userData) return children;
  else <Navigate to="/login" replace />;
}

export default GuardRouter;
