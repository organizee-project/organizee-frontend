import { useInfiniteQuery, useMutation } from "react-query";
import { api, apiWithToken } from "services/api";
import { IPagination } from "types/general";
import { IComment } from "types/guide";

export const useCommentsBySlug = (slug: string) => {
  const getCommentBySlug = async ({ pageParam = 0, queryKey }) => {
    const slug = queryKey[1];

    const { data } = await api().get(
      `/comments/guide/${slug}?page${pageParam}&size=12`
    );
    return data as IPagination<IComment>;
  };

  return useInfiniteQuery(["getCommentsBySlug", slug], getCommentBySlug, {
    getNextPageParam: (data) => {
      if (data.nextPage === data.currentPage) return undefined;

      return data.nextPage;
    },
  });
};

export const useCreateComment = (slug: string, props) => {
  const createComment = async (comment) => {
    const data = await apiWithToken().post<IComment>(
      `/comments/guide/${slug}`,
      comment
    );
    return data;
  };

  return useMutation(createComment, props);
};
