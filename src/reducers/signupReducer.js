const signupReducer = (email = "", action) => {
  console.log(email, "email");
  if (action.type === "SEND_EMAIL") {
    return action.payload;
  }
  return email;
};

export default signupReducer;
