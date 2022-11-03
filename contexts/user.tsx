import { createContext, useState } from "react";

const UserContext = createContext({});

const UserContextProvider = (props) => {
  const [user, setUser] = useState();
  const [viewedUser, setViewedUser] = useState();

  const login = () => {};

  return (
    <UserContext.Provider value={0}>{props.children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
