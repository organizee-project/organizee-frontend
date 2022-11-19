import axios from "axios";

export const api = () => {
  return axios.create({
    baseURL: "https://organizeeee-backend.herokuapp.com/v1",
  });
};

export const apiWithToken = () => {
  const token = localStorage.getItem("token").replaceAll('"', "");

  return axios.create({
    baseURL: "https://organizeeee-backend.herokuapp.com/v1",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
