import { combineReducers } from "redux";

const selectedLoginReducer = (selectedLogin = null, action) => {
  if (action.type === "SEND_LOGINDATA") {
    console.log(action.payload);
    return action.payload;
  }
  return selectedLogin;
};

const rootReducer = combineReducers({
  selectedLogin: selectedLoginReducer,
});
export default rootReducer;
