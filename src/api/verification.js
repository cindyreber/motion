import axios from "axios";

const baseURL = "https://motion.propulsion-home.ch/backend/";

export const verification = async (data) => {
  console.log(data);
    

  const response = await axios.patch(
    `${baseURL}api/auth/registration/validation/`,
    data
  );

  //   console.log(response);
  return response;
};
