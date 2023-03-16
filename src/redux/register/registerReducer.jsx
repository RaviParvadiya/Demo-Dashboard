import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  RESET_REGISTER_FAILURE,
} from "./registerTypes";

const initialState = {
  error: null,
  isSignedUp: false,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: null,
        isSignedUp: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSignedUp: false,
      };
    case RESET_REGISTER_FAILURE:
      return {
        ...state,
        error: null,
        isSignedUp: false,
      };
    default:
      return state;
  }
};

export default registerReducer;
