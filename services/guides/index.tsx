import { useInfiniteQuery } from "react-query";
import { api } from "services/api";
import { IPagination } from "types/general";
import { IGuide } from "types/guide";

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
