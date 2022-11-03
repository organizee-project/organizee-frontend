import { useInfiniteQuery } from "react-query";
import { apiWithToken } from "services/api";
import { IPagination, IResult } from "types/general";
import { IGuide } from "types/guide";
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

export const useUserGuidesList = () => {
  const getUserGuidesList = async ({ pageParam = 0 }) => {
    const { username } = JSON.parse(localStorage.getItem("user"));
    const { data } = await apiWithToken().get(
      `/users/${username}/guides?page=${pageParam}&size=12`
    );
    return data as IPagination<IGuide>;
  };

  return useInfiniteQuery(["userGuides"], getUserGuidesList, {
    getNextPageParam: (data) => {
      if (data.nextPage === data.currentPage) return undefined;

      return data.nextPage;
    },
  });
};

export const useUserLikesList = () => {
  const getLikesList = async ({ pageParam = 0 }) => {
    const { username } = JSON.parse(localStorage.getItem("user"));
    const { data } = await apiWithToken().get(
      `/guides/user/${username}/likes?page=${pageParam}&size=12`
    );
    return data as IPagination<IGuide>;
  };

  return useInfiniteQuery(["userLikes"], getLikesList, {
    getNextPageParam: (data) => {
      if (data.nextPage === data.currentPage) return undefined;

      return data.nextPage;
    },
  });
};

export const useUserInteractionsList = () => {
  const getInteractionsList = async ({ pageParam = 0 }) => {
    const { username } = JSON.parse(localStorage.getItem("user"));
    const { data } = await apiWithToken().get(
      `/guides/user/${username}/likes?page=${pageParam}&size=12`
    );
    return data as IPagination<IGuide>;
  };

  return useInfiniteQuery(["userLikes"], getInteractionsList, {
    getNextPageParam: (data) => {
      if (data.nextPage === data.currentPage) return undefined;

      return data.nextPage;
    },
  });
};
