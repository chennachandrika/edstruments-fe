import { createContext, useState } from "react";

// Create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("userSession")
  );

  const login = (userData) => {
    localStorage.setItem("userSession", JSON.stringify(userData));
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("userSession");
    localStorage.removeItem("invoiceDetails");
    localStorage.removeItem("isFormSubmitted");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
