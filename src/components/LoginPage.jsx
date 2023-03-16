import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { APIENDPOINT } from "../api/API";
import {
  loginUser,
  logout,
  resetLoginFailure,
  resetRegisterFailure,
} from "../redux";
import { io } from "socket.io-client";
import useAuth from "../auth/useAuth";

const socket = io(APIENDPOINT);

const LoginPage = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { error, isLoggedIn } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.clear();
    dispatch(resetRegisterFailure());
    dispatch(logout());
  }, []);

  useAuth(socket);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(inputs));
    // setIsLoggedIn(true);
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(resetLoginFailure());
    }
  }, [error]);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={inputs.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Log in</button>
      </form>
      <Link to="/signup">
        <p>Don't have an account?</p>
      </Link>
    </div>
  );
};

export default LoginPage;
