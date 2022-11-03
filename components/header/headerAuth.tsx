import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "utils/firebase";
import { HeaderAuthOff } from "./headerAuthOff";
import { HeaderAuthOn } from "./headerAuthOn";

export const HeaderAuth = () => {
  const [user] = useAuthState(auth);

  if (user) return <HeaderAuthOn />;

  return <HeaderAuthOff />;
};
