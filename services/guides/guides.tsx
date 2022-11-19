import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import { api, apiWithToken } from "services/api";
import { IPagination } from "types/general";
import { IGuide } from "types/guide";

export const useGuidesList = (sortBy = "", category = "") => {
  const getGuidesList = async ({ pageParam = 0, queryKey }) => {
    const sortBy = queryKey[1];
    const category = queryKey[2];

    let url = `/guides?page=${pageParam}&size=12`;
    if (sortBy != "") url += `&sortBy=${sortBy}`;
    if (category != "") url += `&category=${category}`;

    const { data } = await api().get(url);
    return data as IPagination<IGuide>;
  };

  return useInfiniteQuery(["home", sortBy, category], getGuidesList, {
    getNextPageParam: (data) => {
      if (data.nextPage === data.currentPage) return undefined;

      return data.nextPage;
    },
  });
};

export const useGuideBySlug = (slug: string, props) => {
  const getGuideBySlug = async () => {
    const { data } = await api().get(`/guides/${slug}`);
    return data as IGuide;
  };

  return useQuery(["getGuideBySlug", slug], getGuideBySlug, props);
};

export const useCreateGuide = (props) => {
  const createGuide = async (guide) => {
    const { data } = await apiWithToken().post(`/guides`, guide);
    return data as IGuide;
  };

  return useMutation(createGuide, props);
};
