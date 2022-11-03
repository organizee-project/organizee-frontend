import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import { api, apiWithToken } from "services/api";
import { IPagination } from "types/general";
import { IGuide, IInteractions } from "types/guide";

export const useGuidesList = (sortBy = "popularity") => {
  const getGuidesList = async ({ pageParam = 0, queryKey }) => {
    const sortBy = queryKey[1];
    const { data } = await api().get(
      `/guides?page=${pageParam}&sortBy=${sortBy}&size=12`
    );
    return data as IPagination<IGuide>;
  };

  return useInfiniteQuery(["home", sortBy], getGuidesList, {
    getNextPageParam: (data) => {
      if (data.nextPage === data.currentPage) return undefined;

      return data.nextPage;
    },
  });
};

export const useGuideBySlug = (slug: string) => {
  const getGuideBySlug = async () => {
    const { data } = await api().get(`/guides/${slug}`);
    return data as IGuide;
  };

  return useQuery(["getGuideBySlug", slug], getGuideBySlug);
};

export const useGuideInteractions = (slug: string) => {
  const getGuideInteractions = async () => {
    const { data } = await apiWithToken().get(`/guides/${slug}/interactions`);
    return data as IInteractions;
  };

  return useQuery(["getGuideInteractions", slug], getGuideInteractions);
};

export const useCreateGuide = (props) => {
  const createGuide = async (guide) => {
    const { data } = await apiWithToken().post(`/guides`, guide);
    return data as IGuide;
  };

  return useMutation(createGuide, props);
};
