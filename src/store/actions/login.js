import { loginPost } from "../../api/logInPost";

const logIn = (credentials, history) => async (dispatch) => {
  console.log(credentials);
  const response = await loginPost(credentials);
  dispatch({ type: "SEND_LOGINDATA", payload: response.data.access });
  localStorage.setItem("token", response.data.access);
};

export default logIn;