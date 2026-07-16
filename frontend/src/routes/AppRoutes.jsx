import { Routes, Route } from "react-router-dom";

import ComplaintSuccess from "../pages/citizen/ComplaintSuccess";
import LandingPage from "../pages/landing/LandingPage";
import RegisterComplaint from "../pages/citizen/RegisterComplaint";
import AIPreview from "../pages/citizen/AIPreview";
import MyComplaints from "../pages/citizen/MyComplaints";
import AuthLayout from "../layouts/AuthLayout";
import { useNavigate } from "react-router-dom";
import CitizenLayout from "../layouts/CitizenLayout";
import Dashboard from "../pages/citizen/Dashboard";
import RoleSelection from "../pages/auth/RoleSelection";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import DuplicateComplaint from "../pages/citizen/DuplicateComplaint";

function AppRoutes() {
  return (
    <Routes>

      {/* Landing Page */}
      <Route
        path="/"
        element={<LandingPage />}
      />
      <Route
        path="duplicate-complaints"
        element={<DuplicateComplaint />}
      />
      <Route
        path="my-complaints"
        element={<MyComplaints />}
      />
      <Route
        path="complaint-success"
        element={<ComplaintSuccess />}
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
      <Route path="/citizen" element={<CitizenLayout />}>

        <Route
          path="dashboard"
          element={<Dashboard />}
        />
        <Route
          path="register-complaint"
          element={<RegisterComplaint />}
        />
        <Route
          path="ai-preview"
          element={<AIPreview />}
        />
        <Route
          path="ai-preview"
          element={<AIPreview />}
        />

      </Route>

    </Routes>
  );
}

export default AppRoutes;