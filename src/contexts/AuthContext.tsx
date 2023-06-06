// contexts/AuthContext.tsx

import React, { createContext, useState } from 'react';

export interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string) => {
    // Replace with your authentication logic using JWT
    const mockUser: User = {
      id: 1,
      username,
      email: 'user@example.com',
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
