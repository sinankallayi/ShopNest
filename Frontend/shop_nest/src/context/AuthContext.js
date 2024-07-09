import { createContext, useState } from "react";
import { getToken, getUserToken } from "utils/auth";
import { base64Decode } from "utils/utils";
export const ACCESS_TOKEN = "token"

export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(base64Decode(getUserToken()?.split('.')[1])));
  const [admin, setAdmin] = useState(JSON.parse(base64Decode(getToken()?.split('.')[1])));
  return (<AuthContext.Provider value={{ user, setUser, admin, setAdmin }}>
    {children}
  </AuthContext.Provider>);
};