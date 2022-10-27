export const useCookie = (key: string) => {
  const getCookie = () => {
    return JSON.parse(localStorage.getItem(key));
  };

  const setCookie = (value: any) => {
    return localStorage.setItem(key, JSON.stringify(value));
  };

  const removeCookie = () => {
    return localStorage.removeItem(key);
  };
  return { getCookie, setCookie, removeCookie };
};
