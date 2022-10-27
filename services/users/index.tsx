import { api } from "services/api";
import { IResult } from "types/general";
import { IUser } from "types/user";

interface ICreateUser {
  name: string;
  surname: string;
  username: string;
}

export const createUser = async (token: string, user: ICreateUser) => {
  const { data } = await api(token).post(`/users`, user);
  return data as IResult<IUser>;
};

export const getUser = async (token: string) => {
  const { data } = await api(token).get(`/users/logged`);
  return data as IResult<IUser>;
};
