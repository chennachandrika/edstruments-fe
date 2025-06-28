import { createContext, useContext } from "react";

export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const InvoiceContext = createContext(null);

export const useInvoice = () => {
  return useContext(InvoiceContext);
};
