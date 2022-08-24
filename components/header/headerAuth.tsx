import { HeaderAuthOff } from "./headerAuthOff";
import { HeaderAuthOn } from "./headerAuthOn";

export const HeaderAuth = () => {
  const isAuth = false;

  if (!isAuth) return <HeaderAuthOn />;

  return <HeaderAuthOff />;
};
