import { useInfiniteQuery, useMutation } from "react-query";
import { apiWithToken, api } from "services/api";
import { IPagination, IResult } from "types/general";
import { IGuide } from "types/guide";
import { IUser, IUserProfile, ICreateUser, IActivity } from "types/user";

export const createUser = async (user: ICreateUser) => {
  const { data } = await apiWithToken().post(`/users`, user);
  return data as IResult<IUser>;
};

export const getUser = async () => {
  const { data } = await apiWithToken().get(`/users/logged`);
  return data as IResult<IUser>;
};

export const getUserInfos = async (username: string) => {
  const { data } = await api().get(`/users/${username}`);
  return data as IResult<IUserProfile>;
};

export const useUserGuidesList = (username: string) => {
  const getUserGuidesList = async ({ pageParam = 0, queryKey }) => {
    const username = queryKey[1];
    const { data } = await api().get(
      `/users/${username}/guides?page=${pageParam}&size=12`
    );
    return data as IPagination<IGuide>;
  };

  return useInfiniteQuery(["userGuides", username], getUserGuidesList, {
    getNextPageParam: (data) => {
      if (data.nextPage === data.currentPage) return undefined;

      return data.nextPage;
    },
  });
};

export const useUserLikesList = (username: string) => {
  const getLikesList = async ({ pageParam = 0, queryKey }) => {
    const username = queryKey[1];
    const { data } = await api().get(
      `/guides/user/${username}/likes?page=${pageParam}&size=12`
    );
    return data as IPagination<IGuide>;
  };

  return useInfiniteQuery(["userLikes", username], getLikesList, {
    getNextPageParam: (data) => {
      if (data.nextPage === data.currentPage) return undefined;

      return data.nextPage;
    },
  });
};

export const useUserSavedList = (username: string) => {
  const getLikesList = async ({ pageParam = 0 }) => {
    const { data } = await api().get(
      `saved/guides/${username}?page=${pageParam}&size=12`
    );
    return data as IPagination<IGuide>;
  };

  return useInfiniteQuery(["userSavedList", username], getLikesList, {
    getNextPageParam: (data) => {
      if (data.nextPage === data.currentPage) return undefined;

      return data.nextPage;
    },
  });
};

export const useUserActivitiesList = (username: string) => {
  const getActivitiesList = async ({ pageParam = 0, queryKey }) => {
    const username = queryKey[1];
    const { data } = await api().get(
      `/users/${username}/activities?page=${pageParam}&size=20`
    );
    return data as IPagination<IActivity>;
  };

  return useInfiniteQuery(["userActivities", username], getActivitiesList, {
    getNextPageParam: (data) => {
      if (data.nextPage === data.currentPage) return undefined;

      return data.nextPage;
    },
  });
};

export const useFollowUser = (isFollowed: boolean, props) => {
  let req: (username: any) => Promise<void>;
  if (!isFollowed) {
    req = async (username) => {
      await apiWithToken().post(`/users/${username}/follow`);
      return;
    };
  } else {
    req = async (username) => {
      await apiWithToken().delete(`/users/${username}/follow`);
      return;
    };
  }

  return useMutation(req, props);
};
