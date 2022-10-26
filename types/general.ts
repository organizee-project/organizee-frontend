export interface IPagination<T> {
  count: number;
  nextPage: number;
  currentPage: number;
  totalPages: number;
  items: T[];
}
