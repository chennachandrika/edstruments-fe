import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../components/Home";
import AuthForm from "../components/AuthForm";
import { AuthProvider } from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import { InvoiceProvider } from "../context/InvoiceContext";
const AppRoutes = () => {
  const isAuthenticated = !!localStorage.getItem("userSession");

  return (
    <AuthProvider>
      <InvoiceProvider>
        <Router>
          <Routes>
            <Route
              path="/login"
              element={
                <PrivateRoute>
                  <AuthForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="*"
              element={
                isAuthenticated ? <Navigate to="/" /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </Router>
      </InvoiceProvider>
    </AuthProvider>
  );
};

export default AppRoutes;
