import { Navigate, Route, Routes, Outlet } from "react-router-dom";

// Layouts
import AuthLayout from "../layouts/AuthLayout";
import CitizenLayout from "../layouts/CitizenLayout";
import AdminLayout from "../layouts/AdminLayout";
import OfficerLayout from "../layouts/OfficerLayout";

// Landing
import LandingPage from "../pages/landing/LandingPage";

// Auth Pages
import RoleSelection from "../pages/auth/RoleSelection";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

// Citizen Pages
import Dashboard from "../pages/citizen/Dashboard";
import RegisterComplaint from "../pages/citizen/RegisterComplaint";
import AIPreview from "../pages/citizen/AIPreview";
import MyComplaints from "../pages/citizen/MyComplaints";
import ComplaintDetails from "../pages/citizen/ComplaintDetails";
import ComplaintSuccess from "../pages/citizen/ComplaintSuccess";
import DuplicateComplaint from "../pages/citizen/DuplicateComplaint";
import Feedback from "../pages/citizen/Feedback";
import Notifications from "../pages/citizen/Notifications";
import Profile from "../pages/citizen/Profile";
import DashboardAnalytics from "../pages/citizen/DashboardAnalytics";
import ComplaintMap from "../pages/citizen/ComplaintMap";
import AIReview from "../pages/citizen/AIReview";
import NotFound from "../pages/NotFound";

// Officer Pages
import Complaints from "../pages/officer/Complaints";
import OfficerProfile from "../pages/officer/Profile";
import OfficerDashboard from "../pages/officer/OfficerDashboard";
// Admin Pages
import AdminDashboard from "../pages/admin/Dashboard";
import Analytics from "../pages/admin/Analytics";
import AdminSettings from "../pages/admin/AdminSettings";
import ComplaintAnalytics from "../pages/admin/ComplaintAnalytics";
import ComplaintHeatmap from "../pages/admin/ComplaintHeatmap";
import Reports from "../pages/admin/Reports";
import DepartmentManagement from "../pages/admin/DepartmentManagement";
import ActivityLogs from "../pages/admin/ActivityLogs";

// Protected Route
import PrivateRoute from "./ProtectedRoute";
import AccessDenied from "../pages/AccessDenied";



// ---------------- Officer Layout ----------------





// ---------------- Officer Pages ----------------





// ---------------- Admin Pages ----------------

function AdminUsers() {

  return (
    <div style={{ padding: 24 }}>
      Admin Users
    </div>
  );

}


function AdminReports() {

  return (
    <div style={{ padding: 24 }}>
      Admin Reports
    </div>
  );

}


function AdminOfficers() {

  return (
    <div style={{ padding: 24 }}>
      Admin Officers
    </div>
  );

}


function AdminDepartments() {

  return (
    <div style={{ padding: 24 }}>
      Admin Departments
    </div>
  );

}


function AdminComplaints() {

  return (
    <div style={{ padding: 24 }}>
      Admin Complaints
    </div>
  );

}



function AdminHeatmap() {

  return (
    <div style={{ padding: 24 }}>
      Admin Heatmap
    </div>
  );

}




// ---------------- Routes ----------------

function AppRoutes() {


  return (

    <Routes>


      {/* Landing */}

      <Route
        path="/"
        element={<LandingPage />}
      />



      {/* Authentication */}

      <Route element={<AuthLayout />}>

        <Route
          path="/auth"
          element={<RoleSelection />}
        />

        <Route
          path="/auth/login/:role"
          element={<Login />}
        />

        <Route
          path="/auth/register/:role"
          element={<Register />}
        />

        <Route
          path="/auth/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/auth/reset-password"
          element={<ResetPassword />}
        />

      </Route>





      {/* Citizen */}

      <Route

        path="/citizen"

        element={

          <PrivateRoute allowedRoles={["citizen"]}>
            <CitizenLayout />
          </PrivateRoute>




        }

      >


        <Route
          index
          element={<Dashboard />}
        />


        <Route
          path="dashboard"
          element={<Dashboard />}
        />


        <Route
          path="profile"
          element={<Profile />}
        />


        <Route
          path="notifications"
          element={<Notifications />}
        />


        <Route
          path="feedback"
          element={<Feedback />}
        />


        <Route
          path="analytics"
          element={<DashboardAnalytics />}
        />


        <Route
          path="map"
          element={<ComplaintMap />}
        />


        <Route
          path="ai-review"
          element={<AIReview />}
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
          path="my-complaints"
          element={<MyComplaints />}
        />


        <Route
          path="complaints/:id"
          element={<ComplaintDetails />}
        />


        <Route
          path="duplicate-complaints"
          element={<DuplicateComplaint />}
        />


        <Route
          path="complaint-success"
          element={<ComplaintSuccess />}
        />


        <Route
          path="departments"
          element={<DepartmentManagement />}
        />


      </Route >






      {/* Officer */}


      < Route

        path="/officer"

        element={

          <PrivateRoute allowedRoles={["officer"]}>
            <OfficerLayout />
          </PrivateRoute>
        }

      >


        <Route
          index
          element={<OfficerDashboard />}
        />


        <Route
          path="dashboard"
          element={<OfficerDashboard />}
        />


        <Route
          path="complaints"
          element={<Complaints />}
        />


        <Route
          path="profile"
          element={<OfficerProfile />}
        />


      </Route >







      {/* Admin */}


      < Route

        path="/admin"

        element={

          <PrivateRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </PrivateRoute>
        }

      >



        <Route
          index
          element={<AdminDashboard />}
        />


        <Route
          path="dashboard"
          element={<AdminDashboard />}
        />


        <Route
          path="users"
          element={<AdminUsers />}
        />


        <Route
          path="officers"
          element={<AdminOfficers />}
        />


        <Route
          path="departments"
          element={<AdminDepartments />}
        />


        <Route
          path="complaints"
          element={<AdminComplaints />}
        />

        <Route
          path="analytics"
          element={<Analytics />}
        />


        <Route
          path="heatmap"
          element={<AdminHeatmap />}
        />


        <Route
          path="reports"
          element={<AdminReports />}
        />


        <Route
          path="settings"
          element={<AdminSettings />}
        />


        <Route
          path="activity"
          element={<ActivityLogs />}
        />


      </Route >





      {/* 404 */}

      

      <Route path="*" element={<NotFound />} />
      <Route

        path="/access-denied"

        element={<AccessDenied />}

      />


    </Routes >

  );

}


export default AppRoutes;