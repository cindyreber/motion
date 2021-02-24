const profileData = (data) => {
  console.log(data, "in action");
  return {
    type: "SEND_PROFILEDATA",
    payload: data
  };
  /* localStorage.setItem("token", response.data.access); */
};
console.log(profileData);

export default profileData;
