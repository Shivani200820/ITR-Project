import { Navigate, Route, Routes, Outlet } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import CitizenLayout from "../layouts/CitizenLayout";
import LandingPage from "../pages/landing/LandingPage";
import RoleSelection from "../pages/auth/RoleSelection";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Dashboard from "../pages/citizen/Dashboard";
import RegisterComplaint from "../pages/citizen/RegisterComplaint";
import AIPreview from "../pages/citizen/AIPreview";
import MyComplaints from "../pages/citizen/MyComplaints";
import ComplaintDetails from "../pages/citizen/ComplaintDetails";
import ComplaintSuccess from "../pages/citizen/ComplaintSuccess";
import DuplicateComplaint from "../pages/citizen/DuplicateComplaint";
import PrivateRoute from "./ProtectedRoute";

function OfficerLayout() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      <Outlet />
    </div>
  );
}

function AdminLayout() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      <Outlet />
    </div>
  );
}

function OfficerDashboardPage() {
  return <div style={{ padding: 24 }}>Officer Dashboard</div>;
}

function OfficerComplaintsPage() {
  return <div style={{ padding: 24 }}>Officer Complaints</div>;
}

function OfficerProfilePage() {
  return <div style={{ padding: 24 }}>Officer Profile</div>;
}

function AdminDashboardPage() {
  return <div style={{ padding: 24 }}>Admin Dashboard</div>;
}

function AdminUsersPage() {
  return <div style={{ padding: 24 }}>Admin Users</div>;
}

function AdminReportsPage() {
  return <div style={{ padding: 24 }}>Admin Reports</div>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route element={<AuthLayout />}>
        <Route path="/auth" element={<RoleSelection />} />
        <Route path="/auth/login/:role" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
      </Route>

      <Route
        path="/citizen"
        element={
          <PrivateRoute allowedRoles={["citizen"]} userRole="citizen">
            <CitizenLayout />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="register-complaint" element={<RegisterComplaint />} />
        <Route path="ai-preview" element={<AIPreview />} />
        <Route path="my-complaints" element={<MyComplaints />} />
        <Route path="complaints/:id" element={<ComplaintDetails />} />
        <Route path="duplicate-complaints" element={<DuplicateComplaint />} />
        <Route path="complaint-success" element={<ComplaintSuccess />} />
      </Route>

      <Route
        path="/officer"
        element={
          <PrivateRoute allowedRoles={["officer"]} userRole="officer">
            <OfficerLayout />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<OfficerDashboardPage />} />
        <Route path="complaints" element={<OfficerComplaintsPage />} />
        <Route path="profile" element={<OfficerProfilePage />} />
      </Route>

      <Route
        path="/admin"
        element={
          <PrivateRoute allowedRoles={["admin"]} userRole="admin">
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="users" element={<AdminUsersPage />} />
        <Route path="reports" element={<AdminReportsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;