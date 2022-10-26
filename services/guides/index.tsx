import { api } from "services/api";
import { IPagination } from "types/general";
import { IGuide } from "types/guide";

export const getGuidesList = async ({ pageParam = 0 }) => {
  const { data } = await api().get(`/guides?page=${pageParam}&size=12`);
  return data as IPagination<IGuide>;
};
