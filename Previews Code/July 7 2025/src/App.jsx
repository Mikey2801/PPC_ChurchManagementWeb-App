import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { UserProvider } from './context/UserContext';
import { AuthProvider, useAuth } from './context/AuthContext';

import Header from './components/Header.jsx';
import Layout from './components/Layout.jsx';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import OurProgram from './pages/OurProgram';
import Events from './pages/Events';
import VisitUs from './pages/VisitUs';
import Login from './pages/Login';
import Register from './pages/Register';
import MassAndEventSchedule from './pages/MassAndEventSchedule';
import Donate from './pages/Donate';
import Home from './pages/Home';
import Services from './pages/Services';
import MassAttendance from './pages/MassAttendance';
import ApplicationForMinistry from './pages/ApplicationForMinistry';
import ApplicationMinistryContacts from './pages/ApplicationMinistryContacts';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import BaptismalCertificate from './pages/BaptismalCertificate';
import BaptismalClass from './pages/BaptismalClass';
import BaptismalScheduling from './pages/BaptismalScheduling';
import MembersList from './pages/MembersList';
import AdminDashboard from './pages/admin/AdminDashboard';
// ...
<Route path="/dashboard/members" element={<MembersList />} />
// Wrapper for public pages
export const PublicPageWrapper = ({ children }) => (
  <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
    <Header />
    <Box sx={{ paddingTop: '64px' }}>{children}</Box>
  </Box>
);

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

// Public Route component
const PublicRoute = ({ children, restricted = false }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  if (isAuthenticated() && restricted) {
    return <Navigate to={from} replace />;
  }

  return children;
};

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicPageWrapper><LandingPage /></PublicPageWrapper>} />
      <Route path="/about-us" element={<PublicPageWrapper><AboutUs /></PublicPageWrapper>} />
      <Route path="/our-team" element={<PublicPageWrapper><OurTeam /></PublicPageWrapper>} />
      <Route path="/our-program" element={<PublicPageWrapper><OurProgram /></PublicPageWrapper>} />
      <Route path="/events" element={<PublicPageWrapper><Events /></PublicPageWrapper>} />
      <Route path="/visit-us" element={<PublicPageWrapper><VisitUs /></PublicPageWrapper>} />
      <Route path="/schedule" element={<PublicPageWrapper><MassAndEventSchedule /></PublicPageWrapper>} />
      <Route path="/donate" element={<PublicPageWrapper><Donate /></PublicPageWrapper>} />
      
      {/* Authentication routes */}
      <Route
        path="/login"
        element={
          <PublicRoute restricted={true}>
            <Box sx={{ pt: 8 }}>
              <Login />
            </Box>
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <PublicPageWrapper><Register /></PublicPageWrapper>
          </PublicRoute>
        }
      />
      
      {/* Redirect old dashboard URL to home */}
      <Route path="/dashboard" element={<Navigate to="/home" replace />} />
      
      {/* Protected Routes */}
      <Route
        path="/home/*"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/edit" element={<ProfileEdit />} />
        <Route path="mass-attendance" element={<MassAttendance />} />
        <Route path="ministry/apply" element={<ApplicationForMinistry />} />
        <Route path="ministry/contacts" element={<ApplicationMinistryContacts />} />
        <Route path="baptismal-certificate" element={<BaptismalCertificate />} />
        <Route path="baptismal-class" element={<BaptismalClass />} />
        <Route path="baptismal-scheduling" element={<BaptismalScheduling />} />
        <Route path="members" element={<MembersList />} />
      </Route>

      {/* Admin Route */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Redirect unknown routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </UserProvider>
  );
}

export default App;