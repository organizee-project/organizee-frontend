import { useQuery, useMutation } from "react-query";
import { apiWithToken } from "services/api";
import { IInteractions } from "types/guide";

export const useGuideInteractions = (slug: string, props) => {
  const getGuideInteractions = async () => {
    const { data } = await apiWithToken().get(`/guides/${slug}/interactions`);
    return data as IInteractions;
  };

  return useQuery(["getGuideInteractions", slug], getGuideInteractions, props);
};

export const useSaveGuide = (props) => {
  const saveGuide = async (slug) => {
    await apiWithToken().post(`/saved/guides/${slug}`);
    return;
  };

  return useMutation(saveGuide, props);
};

export const useUnsaveGuide = (props) => {
  const unsaveGuide = async (slug) => {
    await apiWithToken().delete(`/saved/guides/${slug}`);
    return;
  };

  return useMutation(unsaveGuide, props);
};

export const useLikeGuide = (props) => {
  const likeGuide = async (slug) => {
    await apiWithToken().post(`/likes/guide/${slug}`);
    return;
  };

  return useMutation(likeGuide, props);
};

export const useUnlikeGuide = (props) => {
  const unlikeGuide = async (slug) => {
    await apiWithToken().delete(`/likes/guide/${slug}`);
    return;
  };

  return useMutation(unlikeGuide, props);
};
