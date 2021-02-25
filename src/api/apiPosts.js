import axios from "axios";

const BASE_URL = "https://motion.propulsion-home.ch/backend/api/social/";
export const getPostsApi = async (url) => {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  if (!token) return new Error("Log in please");
  const response = await axios.get(`${BASE_URL}${url}`, config);
  return response.data;
};
