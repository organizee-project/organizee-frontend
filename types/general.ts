export interface IPagination<T> {
  count: number;
  nextPage: number;
  currentPage: number;
  totalPages: number;
  itens: T[];
}
