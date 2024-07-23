import React from "react";
// import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
<<<<<<< HEAD
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/Login" replace />;
  }
  return children;
=======
    const token = localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/Login" replace />;
    }
    return children;
>>>>>>> 19eed9db380bf4a4604a020e26824abe743d3f55
};

export default ProtectedRoute;
