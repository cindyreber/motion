import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";

const rootReducer = combineReducers({
  loginData: loginReducer,
  email: signupReducer,
});
export default rootReducer;
