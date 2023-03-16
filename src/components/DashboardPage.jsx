import React from "react";
import SignoutPage from "./SignoutPage";
import { io } from "socket.io-client";
import useAuth from "../auth/useAuth";
import { APIENDPOINT } from "../api/API";

const socket = io(APIENDPOINT);

const DashboardPage = () => {
  useAuth(socket);

  return (
    <div>
      <label>DashboardPage</label>
      <div>
        <SignoutPage />
      </div>
    </div>
  );
};

export default DashboardPage;
