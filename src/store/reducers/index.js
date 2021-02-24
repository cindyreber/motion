import { combineReducers } from "redux";
import profileData from "./profileDataReducer";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import profileDataReducer from "./profileDataReducer";

const rootReducer = combineReducers({
  loginData: loginReducer,
  email: signupReducer,
  userData: profileDataReducer
});
export default rootReducer;
