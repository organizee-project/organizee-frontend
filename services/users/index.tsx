import { apiWithToken } from "services/api";
import { IResult } from "types/general";
import { IUser } from "types/user";

interface ICreateUser {
  name: string;
  surname: string;
  username: string;
}

export const createUser = async (user: ICreateUser) => {
  const { data } = await apiWithToken().post(`/users`, user);
  return data as IResult<IUser>;
};

export const getUser = async () => {
  const { data } = await apiWithToken().get(`/users/logged`);
  return data as IResult<IUser>;
};
