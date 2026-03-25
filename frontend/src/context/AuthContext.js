import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState({
    userId: localStorage.getItem("userId"),
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email")
  });

  const login = (data) => {
    localStorage.setItem("userId", data._id);
    localStorage.setItem("name", data.name);
    localStorage.setItem("email", data.email);

    setUser({
      userId: data._id,
      name: data.name,
      email: data.email
    });
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;