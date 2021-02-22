import axios from "axios";

const baseURL = "https://motion.propulsion-home.ch/backend/";
const data = {
  email: "calvo.ezequias@gmail.com",
  password: "1234",
};

export const loginPost = async () => {
  const response = await axios.post(`${baseURL}api/auth/token/`, data);
  console.log(response);
};

// USING FETCH
// export const loginPost = async () => {
//   const response = await fetch(`${baseURL}api/auth/token/`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   const content = await response.json();

//   console.log(content);
// };
