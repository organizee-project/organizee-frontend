import { useQuery } from "react-query";
import { api } from "services/api";
import { ICategory } from "types/guide";

export const useCategories = () => {
  const getCategories = async () => {
    const { data } = await api().get(`/categories`);
    return data as ICategory[];
  };

  return useQuery(["categories"], getCategories);
};
