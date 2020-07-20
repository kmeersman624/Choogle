import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ value = {}, children }) => {
  const [user, setUser] = useState(value);
  return <Provider value={{ user, setUser }}>{children}</Provider>;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { useUserContext, UserProvider };
