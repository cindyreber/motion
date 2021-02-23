import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";

const rootReducer = combineReducers({
  loginData: loginReducer,
  emailSignUp: signupReducer,
});
export default rootReducer;
