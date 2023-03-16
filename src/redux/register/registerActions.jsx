import API from "../../api/API";
import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  RESET_REGISTER_FAILURE,
} from "./registerTypes";

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
    payload: "",
  };
};

export const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};

export const registerFailure = (error) => {
  return {
    type: REGISTER_FAILURE,
    payload: error,
  };
};

export const resetRegisterFailure = (error) => {
  return {
    type: RESET_REGISTER_FAILURE,
    payload: "",
  };
};

export const registerUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(registerRequest());
      const response = await API.post("register", user);
      console.log(response.data);
      dispatch(registerSuccess(user));
    } catch (err) {
      if (err.response) {
        dispatch(registerFailure(err.response.data.msg));
      } else {
        dispatch(registerFailure("An error occurred while registering"));
      }
    }
  };
};
