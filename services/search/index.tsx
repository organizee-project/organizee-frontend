import { useInfiniteQuery, useQuery } from "react-query";
import { api } from "services/api";
import { IPagination } from "types/general";
import { IGuide } from "types/guide";

export const useSearchList = (q) => {
  const getSearchList = async ({ pageParam = 0, queryKey }) => {
    const q = queryKey[1];

    let url = `/search?page=${pageParam}&size=20&q=${q}`;

    const { data } = await api().get(url);
    return data as IPagination<IGuide>;
  };

  return useInfiniteQuery(["search", q], getSearchList, {
    getNextPageParam: (data) => {
      if (data.nextPage === data.currentPage) return undefined;

      return data.nextPage;
    },
  });
};

export const getSuggestions = async (slug: string) => {
  const { data } = await api().get(`/search/suggestions?q=${slug}`);
  return data as string[];
};
