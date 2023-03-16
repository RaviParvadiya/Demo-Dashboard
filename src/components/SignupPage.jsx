import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import API from "../api/API";
import { logout, registerUser, resetRegisterFailure } from "../redux";

const SignupPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  // const [isSignedUp, setIsSignedUp] = useState(false);
  const { error, isSignedUp } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
    // setIsSignedUp(true);
  };

  useEffect(() => {
    dispatch(logout());
  });

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(resetRegisterFailure());
    }
  }, [error]);

  if (isSignedUp) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={user.email}
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
              value={user.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Sign up</button>
      </form>
      <Link to="/login">
        <p>Already have an account?</p>
      </Link>
    </div>
  );
};

export default SignupPage;
