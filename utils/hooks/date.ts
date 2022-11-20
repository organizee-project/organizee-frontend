export const useDate = (date: string) => {
  const createdAtDate = new Date(date);
  const day = createdAtDate.getDate();
  const month = createdAtDate.getMonth();
  const year = createdAtDate.getFullYear();

  const hour = createdAtDate.getHours();
  const minutes = createdAtDate.getMinutes();

  return `${day}/${month}/${year} - ${hour}h${minutes}`;
};
