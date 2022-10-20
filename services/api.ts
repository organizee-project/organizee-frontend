import axios from "axios";

export const api = (token?: string) => {
  if (token)
    return axios.create({
      baseURL: "http://organizee.us-east-1.elasticbeanstalk.com",
    });
  else
    return axios.create({
      baseURL: "http://organizee.us-east-1.elasticbeanstalk.com",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
};
