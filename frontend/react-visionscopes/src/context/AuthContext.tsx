import React, { createContext, useState, ReactNode } from "react";
import { jwtDecode } from "jwt-decode";
import { ACCESS_TOKEN } from "../constants";

interface AuthContextType {
  username: string | null;
  setUsername: (username: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [username, setUsername] = useState<string | null>(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) return null;
    try {
      const decoded: any = jwtDecode(token);
      return decoded.username ?? null;
    } catch {
      return null;
    }
  });

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};
