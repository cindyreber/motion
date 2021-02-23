const signupReducer = (email = "", action) => {
  console.log(email, "email");
  console.log(action.payload, "action");
  if (action.type === "SEND_EMAIL") {
    return action.payload;
  }
  return email;
};

export default signupReducer;
