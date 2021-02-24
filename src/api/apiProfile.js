import axios from "axios";

const baseURL = "https://motion.propulsion-home.ch/backend/";

const ApiProfile = async () => {
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const result = await axios.get(`${baseURL}api/users/me/`, config);

  console.log(result, "from navbar");

  return result.data;
};


export default ApiProfile;
