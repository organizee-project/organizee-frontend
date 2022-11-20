import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import { api, apiWithToken } from "services/api";
import { IPagination } from "types/general";
import { IGuide } from "types/guide";

export const useGuidesList = (sortBy = "", category = "", props) => {
  const getGuidesList = async ({ pageParam = 0, queryKey }) => {
    const sortBy = queryKey[1];
    const category = queryKey[2];

    let url = "";

    if (sortBy != "") url += `&sortBy=${sortBy}`;

    if (category === "follows") {
      url = `/guides/feed/following?page=${pageParam}&size=12` + url;
      const { data } = await apiWithToken().get(url);
      return data as IPagination<IGuide>;
    }

    url = `/guides?page=${pageParam}&size=12` + url;
    if (category != "") url += `&category=${category}`;

    const { data } = await api().get(url);
    return data as IPagination<IGuide>;
  };

  return useInfiniteQuery(["home", sortBy, category], getGuidesList, {
    ...props,
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

export const saveFile = async (file: File) => {
  const header = { "Content-Type": "multipart/form-data" };

  const { data } = await apiWithToken(header).post(`/files`, {
    file,
  });
  return data as IReturnFile;
};

interface IReturnFile {
  url: string;
}
