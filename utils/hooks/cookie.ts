export const useCookie = (key: string) => {
  const getCookie = () => {
    return localStorage.getItem(key);
  };

  const setCookie = (value: string) => {
    return localStorage.setItem(key, value);
  };

  const removeCookie = () => {
    return localStorage.removeItem(key);
  };
  return { getCookie, setCookie, removeCookie };
};
