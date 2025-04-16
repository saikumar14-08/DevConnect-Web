import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state?.add_user);
  return user?._id ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
