import axios from "axios";

const BASE_URL = "https://motion.propulsion-home.ch/backend/api/social/";
let token = localStorage.getItem("token");
let config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

export const getPostsApi = async (url) => {
  if (!token) return new Error("Log in please");
  const response = await axios.get(`${BASE_URL}${url}`, config);
  return response.data;
};

export const createPostApi = async (data, URL) => {
  if (!token) return new Error("Log in please");
  let url = `${BASE_URL}${URL}`;
  const response = await axios.post(url, { content: data.content }, config);
  console.log(response, "from api");
  return response.data;
};
