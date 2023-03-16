import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "../redux";

const SignoutPage = () => {
  const navigate = useNavigate();

  // const { isLoggedIn } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    // window.location.href = "/login";
    dispatch(logout());
    window.localStorage.removeItem("token");
    navigate("/login");
  };

/*   if(!isLoggedIn){
    return <Navigate to="/login" replace/>
  } */

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignoutPage;
