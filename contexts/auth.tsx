import { useRouter } from "next/router";
import { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { createUser, getUser as getUser } from "services/users";
import { ICreateUser, IUserProfile } from "types/user";
import { auth, logout as firebaseLogout } from "utils/firebase";
import { useCookie } from "utils/hooks";

const AuthContext = createContext({} as IAuthContext);

const AuthContextProvider = (props) => {
  const router = useRouter();

  const [user] = useAuthState(auth);

  const {
    setCookie: setUser,
    getCookie: getUserCookie,
    removeCookie: removeUser,
  } = useCookie("user");

  const {
    setCookie: setToken,
    removeCookie: removeToken,
    getCookie: getToken,
  } = useCookie("token");

  const refreshToken = (func: () => void) => {
    if (user)
      user.getIdToken().then(async (token) => {
        if (getToken() !== token) setToken(token);
        func();
      });
  };

  const register = (newUser: ICreateUser) => {
    user.getIdToken().then(async (token) => {
      setToken(token);
      const data = await createUser(newUser);
      setUser(data);
      router.back();
    });
  };

  const login = () => {
    user.getIdToken().then(async (token) => {
      setToken(token);
      const data = await getUser();
      setUser(data.user);
      router.back();
    });
  };

  const logout = () => {
    router.push("/");
    firebaseLogout();
    removeUser();
    removeToken();
  };

  return (
    <AuthContext.Provider
      value={{ user: getUserCookie(), login, register, refreshToken, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };

interface IAuthContext {
  user: IUserProfile;
  login: () => void;
  register: (newUser: ICreateUser) => void;
  refreshToken: (func: () => void) => void;
  logout: () => void;
}
