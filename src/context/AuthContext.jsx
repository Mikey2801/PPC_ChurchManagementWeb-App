import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is authenticated on initial load
  const checkAuth = useCallback(async () => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const userData = await auth.me();
      setUser(userData);
      setError(null);
    } catch (err) {
      console.error('Authentication check failed:', err);
      localStorage.removeItem('auth_token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Redirect to login if not authenticated and trying to access protected route
  useEffect(() => {
    const publicPaths = ['/', '/about-us', '/our-team', '/our-program', '/events', '/visit-us', '/schedule', '/donate', '/login', '/register'];
    const isPublicPath = publicPaths.some(path => location.pathname === path || location.pathname.startsWith('/public'));
    
    if (!loading && !user && !isPublicPath) {
      navigate('/login', { state: { from: location }, replace: true });
    }
  }, [user, loading, navigate, location]);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      // For development/testing only - remove in production
      if (email === 'member@example.com' && password === 'password123') {
        const mockUser = {
          id: 1,
          email: 'member@example.com',
          name: 'Test Member',
          roles: ['member'],
          token: 'mock-jwt-token-for-development'
        };
        
        localStorage.setItem('auth_token', mockUser.token);
        localStorage.setItem('user', JSON.stringify(mockUser));
        setUser(mockUser);
        
        const from = location.state?.from?.pathname || '/home';
        navigate(from, { replace: true });
        return { success: true };
      }
      
      // For admin testing
      if (email === 'admin@example.com' && password === 'admin123') {
        const mockAdmin = {
          id: 2,
          email: 'admin@example.com',
          name: 'Test Admin',
          roles: ['admin'],
          token: 'mock-jwt-token-for-admin'
        };
        
        localStorage.setItem('auth_token', mockAdmin.token);
        localStorage.setItem('user', JSON.stringify(mockAdmin));
        setUser(mockAdmin);
        
        const from = location.state?.from?.pathname || '/admin/dashboard';
        navigate(from, { replace: true });
        return { success: true };
      }
      
      // Actual API call for real authentication
      const response = await auth.login({ email, password });
      
      // Store the token and user data
      localStorage.setItem('auth_token', response.token);
      setUser(response.user);
      
      // Redirect based on user role
      const from = location.state?.from?.pathname || 
                 (response.user.roles.includes('admin') ? '/admin/dashboard' : '/home');
      navigate(from, { replace: true });
      
      return { success: true };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = useCallback(async () => {
    try {
      await auth.logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      // Clear auth state and storage
      localStorage.removeItem('auth_token');
      setUser(null);
      setError(null);
      navigate('/login');
    }
  }, [navigate]);

  const updateUser = (userData) => {
    setUser(prevUser => ({
      ...prevUser,
      ...userData
    }));
  };

  const hasRole = (role) => {
    if (!user || !user.roles) return false;
    return user.roles.includes(role);
  };

  const hasAnyRole = (roles) => {
    if (!user || !user.roles) return false;
    return user.roles.some(role => roles.includes(role));
  };

  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        logout,
        updateUser,
        isAuthenticated,
        hasRole,
        hasAnyRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};