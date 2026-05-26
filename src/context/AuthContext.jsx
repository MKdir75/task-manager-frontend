import React, { createContext, useState } from "react";
import API from "../utils/api";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const { data } = await API.post("/auth/login", { email, password });
      setUser(data.user); 
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      console.error(error.response?.data?.message || "Login failed");
      return null;
    }
  };

  const signup = async (name, email, password) => {
    try {
      const { data } = await API.post("/auth/signup", { name, email, password });
      setUser(data.user);
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      console.error(error.response?.data?.message || "Signup failed");
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
