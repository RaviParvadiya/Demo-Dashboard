import API from "../../api/API";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RESET_LOGIN_FAILURE,
} from "./loginTypes";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
    payload: "",
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

export const resetLoginFailure = () => {
  return {
    type: RESET_LOGIN_FAILURE,
    payload: "",
  };
};

export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(loginRequest());
      const response = await API.post("login", user);
      window.localStorage.setItem("token", response.data.data);
      dispatch(loginSuccess(user));
    } catch (err) {
      if (err.response) {
        dispatch(loginFailure(err.response.data.msg));
      } else {
        dispatch(loginFailure("An error occurred while logging in"));
      }
    }
  };
};
