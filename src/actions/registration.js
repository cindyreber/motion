import { registration } from "../api/registration";

const setSignUp = (email) => async (dispatch) => {
  const response = await registration(email);
  console.log(response, "from actions");
  dispatch({ type: "SEND_EMAIL", payload: response.config.data });
};

export default setSignUp;
