import axios from "axios";

const baseURL = "https://motion.propulsion-home.ch/backend/";
// {
//   email: "agustin@gmail";
// }

export const registration = async (data) => {
  console.log(data);
  const response = await axios.post(`${baseURL}api/auth/registration/`, data);
  return response;
};
