import { Navigate, Route, Routes, Outlet } from "react-router-dom";

// Layouts
import AuthLayout from "../layouts/AuthLayout";
import CitizenLayout from "../layouts/CitizenLayout";
import AdminLayout from "../layouts/AdminLayout";
import UserManagement from "../pages/admin/UserManagement";
import OfficerManagement from "../pages/admin/OfficerManagement";
import ComplaintAnalytics from "../pages/admin/ComplaintAnalytics";

// Landing
import LandingPage from "../pages/landing/LandingPage";

// Auth Pages
import RoleSelection from "../pages/auth/RoleSelection";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import ComplaintHeatmap from "../pages/admin/ComplaintHeatmap";
import Reports from "../pages/admin/Reports";
// Citizen Pages
import Dashboard from "../pages/citizen/Dashboard";
import AdminSettings from "../pages/admin/AdminSettings";
import RegisterComplaint from "../pages/citizen/RegisterComplaint";
import AIPreview from "../pages/citizen/AIPreview";
import MyComplaints from "../pages/citizen/MyComplaints";
import ComplaintDetails from "../pages/citizen/ComplaintDetails";
import ComplaintSuccess from "../pages/citizen/ComplaintSuccess";
import DuplicateComplaint from "../pages/citizen/DuplicateComplaint";
import DepartmentManagement from "../pages/admin/DepartmentManagement";
// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard";

// Protected Route
import PrivateRoute from "./ProtectedRoute";
import Register from "../pages/auth/Register";

// ---------------- Officer Layout ----------------

function OfficerLayout() {
  return
  <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
    <Outlet />
  </div>
    ;
}

// ---------------- Officer Pages ----------------

function OfficerDashboard() {
  return <div style={{ padding: 24 }}>Officer Dashboard</div>;
}

function OfficerComplaints() {
  return <div style={{ padding: 24 }}>Officer Complaints</div>;
}

function OfficerProfile() {
  return <div style={{ padding: 24 }}>Officer Profile</div>;
}

// ---------------- Admin Pages ----------------

function AdminUsers() {
  return <div style={{ padding: 24 }}>Admin Users</div>;
}

function AdminReports() {
  return <div style={{ padding: 24 }}>Admin Reports</div>;
}
function AdminOfficers() {
  return <div style={{ padding: 24 }}>Admin Officers</div>;
}

function AdminDepartments() {
  return <div style={{ padding: 24 }}>Admin Departments</div>;
}

function AdminComplaints() {
  return <div style={{ padding: 24 }}>Admin Complaints</div>;
}

function AdminAnalytics() {
  return <div style={{ padding: 24 }}>Admin Analytics</div>;
}

function AdminHeatmap() {
  return <div style={{ padding: 24 }}>Admin Heatmap</div>;
}

function AdminSettings() {
  return <div style={{ padding: 24 }}>Admin Settings</div>;
}
// ---------------- Routes ----------------

function AppRoutes() {
  return (
    <Routes>

      {/* Landing */}
      <Route path="/" element={<LandingPage />} />
      <Route

        path="reports"

        element={<Reports />}

      />

      {/* Authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/auth" element={<RoleSelection />} />
        <Route path="/auth/login/:role" element={<Login />} />
        <Route
          path="/auth/register/:role"
          element={<Register />}
        />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
      </Route>
      <Route

        path="settings"

        element={<AdminSettings />}

      />

      {/* Citizen */}
      <Route
        path="/citizen"
        element={
          <PrivateRoute
            allowedRoles={["citizen"]}
            userRole="citizen"
          >
            <CitizenLayout />
          </PrivateRoute>
        }
      >
        <Route

          path="departments"

          element={<DepartmentManagement />}

        />
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="register-complaint" element={<RegisterComplaint />} />
        <Route path="ai-preview" element={<AIPreview />} />
        <Route path="my-complaints" element={<MyComplaints />} />
        <Route path="complaints/:id" element={<ComplaintDetails />} />
        <Route path="duplicate-complaints" element={<DuplicateComplaint />} />
        <Route path="complaint-success" element={<ComplaintSuccess />} />
      </Route>

      {/* Officer */}
      <Route
        path="/officer"
        element={
          <PrivateRoute
            allowedRoles={["officer"]}
            userRole="officer"
          >
            <OfficerLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<OfficerDashboard />} />
        <Route path="dashboard" element={<OfficerDashboard />} />
        <Route path="complaints" element={<OfficerComplaints />} />
        <Route path="profile" element={<OfficerProfile />} />
      </Route>

      {/* Admin */}
      <Route

        path="analytics"

        element={<ComplaintAnalytics />}

      />
      <Route

        path="officers"

        element={<OfficerManagement />}

      />
      <Route

        path="heatmap"

        element={<ComplaintHeatmap />}

      />



      <Route
        path="/admin"
        element={
          <PrivateRoute
            allowedRoles={["admin"]}
            userRole="admin"
          >
            <AdminLayout />
          </PrivateRoute>
        }

      >
        <Route path="officers" element={<AdminOfficers />} />
        <Route path="departments" element={<AdminDepartments />} />
        <Route path="complaints" element={<AdminComplaints />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="heatmap" element={<AdminHeatmap />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="reports" element={<AdminReports />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default AppRoutes;