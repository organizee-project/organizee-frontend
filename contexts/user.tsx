import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { createUser } from "services/users";
import { ICreateUser, IUser, IUserProfile } from "types/user";
import { auth } from "utils/firebase";
import { useCookie } from "utils/hooks";

const UserContext = createContext({} as IUserContext);

const UserContextProvider = (props) => {
  const router = useRouter();

  const [user] = useAuthState(auth);

  const {
    setCookie: setUser,
    getCookie: getUser,
    removeCookie: removeUser,
  } = useCookie("user");
  const { setCookie: setToken, removeCookie: removeToken } = useCookie("token");

  const updateToken = () => {
    user.getIdToken().then(async (token) => {
      setToken(token);
    });
  };

  const register = (newUser: ICreateUser) => {
    user.getIdToken().then(async (token) => {
      setToken(token);
      const data = await createUser(newUser);
      setUser(data);
      router.push("/");
    });
  };

  const login = () => {
    user.getIdToken().then(async (token) => {
      setToken(token);
      const data = await getUser();
      setUser(data.user);
      router.push("/");
    });
  };

  const logout = () => {
    firebaseLogout();
    removeUser();
    removeToken();
    router.push("/");
  };

  return (
    <UserContext.Provider
      value={{ user: getUser(), login, register, updateToken, logout }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

interface IUserContext {
  user: IUserProfile;
  login: () => void;
  register: (newUser: ICreateUser) => void;
  updateToken: () => void;
  logout: () => void;
}
function firebaseLogout() {
  throw new Error("Function not implemented.");
}
