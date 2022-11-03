export const useCookie = (key: string) => {
  const getCookie = () => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (ex) {
      if (typeof window !== "undefined") return localStorage.getItem(key);
      return { imgUrl: "", surname: "", username: "", name: "" };
    }
  };

  const setCookie = (value: any) => {
    return localStorage.setItem(key, JSON.stringify(value));
  };

  const removeCookie = () => {
    return localStorage.removeItem(key);
  };
  return { getCookie, setCookie, removeCookie };
};
