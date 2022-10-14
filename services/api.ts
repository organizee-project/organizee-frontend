import axios from "axios";
import { useCookie } from "utils/hooks/cookie";

export const api = () => {
  return axios.create({
    baseURL: "http://organizee.us-east-1.elasticbeanstalk.com",
  });
};

export const apiWithToken = () => {
  const { getCookie: token } = useCookie("token");

  return axios.create({
    baseURL: "http://organizee.us-east-1.elasticbeanstalk.com",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
