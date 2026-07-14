import { Routes, Route } from "react-router-dom";

// Landing Page
import LandingPage from "../pages/landing/LandingPage";

// Auth Layout
import AuthLayout from "../layouts/AuthLayout";

// Auth Pages
import RoleSelection from "../pages/auth/RoleSelection";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

function AppRoutes() {
  return (
    <Routes>

      {/* Landing Page */}
      <Route
        path="/"
        element={<LandingPage />}
      />

      {/* Authentication Layout */}
      <Route element={<AuthLayout />}>

        <Route
          path="/auth"
          element={<RoleSelection />}
        />

        <Route
          path="/login/:role"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />

      </Route>

    </Routes>
  );
}

export default AppRoutes;