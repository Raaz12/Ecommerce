import axios from "axios";

export const getProfileData = () => {
  let data = JSON.stringify({
    username: "kminchelle",
    password: "0lelplR",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://dummyjson.com/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios.request(config);
};
