import { useInfiniteQuery, useMutation } from "react-query";
import { apiWithToken } from "services/api";
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
  const { data } = await apiWithToken().get(`/users/${username}`);
  return data as IResult<IUserProfile>;
};

export const useUserGuidesList = (username: string, props) => {
  const getUserGuidesList = async ({ pageParam = 0, queryKey }) => {
    const username = queryKey[1];
    const { data } = await apiWithToken().get(
      `/users/${username}/guides?page=${pageParam}&size=12`
    );
    return data as IPagination<IGuide>;
  };

  return useInfiniteQuery(["userGuides", username], getUserGuidesList, {
    ...props,
    getNextPageParam: (data) => {
      if (data.nextPage === data.currentPage) return undefined;

      return data.nextPage;
    },
  });
};

export const useUserLikesList = (username: string, props) => {
  const getLikesList = async ({ pageParam = 0, queryKey }) => {
    const username = queryKey[1];
    const { data } = await apiWithToken().get(
      `/guides/user/${username}/likes?page=${pageParam}&size=12`
    );
    return data as IPagination<IGuide>;
  };

  return useInfiniteQuery(["userLikes", username], getLikesList, {
    ...props,
    getNextPageParam: (data) => {
      if (data.nextPage === data.currentPage) return undefined;

      return data.nextPage;
    },
  });
};

export const useUserSavedList = (username: string, props) => {
  const getLikesList = async ({ pageParam = 0 }) => {
    const { data } = await apiWithToken().get(
      `saved/guides?page=${pageParam}&size=12`
    );
    return data as IPagination<IGuide>;
  };

  return useInfiniteQuery(["userSavedList", username], getLikesList, {
    ...props,
    getNextPageParam: (data) => {
      if (data.nextPage === data.currentPage) return undefined;

      return data.nextPage;
    },
  });
};
export const useUserInteractionsList = (username: string, props) => {
  const getInteractionsList = async ({ pageParam = 0, queryKey }) => {
    const username = queryKey[1];
    const { data } = await apiWithToken().get(
      `/guides/user/${username}/likes?page=${pageParam}&size=12`
    );
    return data as IPagination<IGuide>;
  };

  return useInfiniteQuery(["userLikes", username], getInteractionsList, {
    ...props,
    getNextPageParam: (data) => {
      if (data.nextPage === data.currentPage) return undefined;

      return data.nextPage;
    },
  });
};

export const useUserActivitiesList = (username: string, props) => {
  const getActivitiesList = async ({ pageParam = 0, queryKey }) => {
    const username = queryKey[1];
    const { data } = await apiWithToken().get(
      `/users/${username}/activities?page=${pageParam}&size=20`
    );
    return data as IPagination<IActivity>;
  };

  return useInfiniteQuery(["userActivities", username], getActivitiesList, {
    ...props,
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
