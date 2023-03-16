import { combineReducers } from "redux";
import loginReducer from "./Login/loginReducer";
import registerReducer from "./register/registerReducer";

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
});

export default rootReducer;
