import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner";
import useRole from "../Hook/useRole";

const AdminRoute = ({ children }) => {
  const user = {};
  const [role, isRoleLoading, isVerify] = useRole(user?.email);
  const location = useLocation();

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default AdminRoute;
