import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LoadingSpinner from '../ui/LoadingSpinner';

const ProtectedRoute = ({ children, roles = [] }) => {
  const { user, loading, isAuthenticated, hasAnyRole } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  // If user is not authenticated, redirect to login page
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If roles are specified, check if user has any of the required roles
  if (roles.length > 0 && !hasAnyRole(roles)) {
    // Redirect to unauthorized page or dashboard
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }


  return children;
};

export default ProtectedRoute;
