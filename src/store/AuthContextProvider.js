import React, { useState } from "react";
import AuthContext from "./auth-context";

let timerId;

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const isLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);

    timerId = setTimeout(logoutHandler, 5 * 60 * 1000);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");

    clearTimeout(timerId);
  };

  const contextObject = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextObject}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
