import { loginPost } from "./api/logInPost";

export const logIn = (email, password) => async (dispatch) => {
  const response = await loginPost({ email, password });
  dispatch({ type: "SEND_LOGINDATA", payload: response });
};
