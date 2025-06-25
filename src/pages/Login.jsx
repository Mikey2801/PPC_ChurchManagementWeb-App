import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  TextField, 
  Button, 
  Typography, 
  MenuItem, 
  IconButton, 
  InputAdornment, 
  Paper,
  CircularProgress,
  Alert,
  Snackbar
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

const LoginScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    userType: 'Member',
    email: '',
    password: ''
  });

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated()) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please enter both email and password');
      return;
    }
    
    try {
      setIsLoading(true);
      setError('');
      
      // Call the login function from AuthContext
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        // Redirect based on user type or previous location
        const from = location.state?.from?.pathname || 
                   (formData.userType === 'Admin' ? '/admin/dashboard' : '/dashboard');
        navigate(from, { replace: true });
      } else {
        setError(result.error || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCloseError = () => {
    setError('');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f5f5f5',
        py: 4
      }}
    >
      <Container maxWidth="xs">
        <Paper 
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            bgcolor: 'white'
          }}
        >
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              mb: 4
            }}
          >
            {/* Logo */}
            <Box sx={{ mb: 2 }}>
              <img 
                src={logo}
                alt="Pamukid Presbyterian Church" 
                style={{ 
                  width: '120px',
                  height: 'auto'
                }}
              />
            </Box>

            {/* Login Header */}
            <Typography 
              variant="h5" 
              component="h1" 
              sx={{
                color: '#333',
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 1
              }}
            >
              LOGIN
            </Typography>
          </Box>

          {/* Login Form */}
          <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            {/* Error Message */}
            {error && (
              <Alert severity="error" onClose={handleCloseError} sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            
            {/* User Type Selector */}
            <TextField
              select
              label="Login As"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
              disabled={isLoading}
              sx={{ 
                mb: 2, 
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'white',
                },
                '& .Mui-disabled': {
                  bgcolor: 'action.disabledBackground',
                }
              }}
              SelectProps={{
                native: false,
                renderValue: (selected) => selected === 'Admin' ? 'Administrator' : selected,
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                },
              }}
            >
              <MenuItem value="Member">Member</MenuItem>
              <MenuItem value="Admin">Administrator</MenuItem>
              <MenuItem value="Treasurer">Treasurer</MenuItem>
            </TextField>

            {/* Username Field */}
            <TextField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
              disabled={isLoading}
              autoComplete="email"
              inputProps={{
                'data-testid': 'email-input'
              }}
            />

            {/* Password Field */}
            <TextField
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
              disabled={isLoading}
              autoComplete="current-password"
              inputProps={{
                'data-testid': 'password-input'
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      disabled={isLoading}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Forgot Password Link */}
            <Box sx={{ textAlign: 'right', mb: 1 }}>
              <Button 
                variant="text" 
                size="small" 
                onClick={() => navigate('/forgot-password')}
                disabled={isLoading}
              >
                Forgot Password?
              </Button>
            </Box>

            {/* Login Button */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={isLoading}
              sx={{
                mt: 1,
                py: 1.5,
                bgcolor: '#2e7d32',
                '&:hover': {
                  bgcolor: '#1b5e20',
                },
                '&.Mui-disabled': {
                  bgcolor: '#a5d6a7',
                  color: 'white'
                },
              }}
              startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>

            {/* Register Link */}
            <Box sx={{ 
              textAlign: 'center',
              mt: 2
            }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary',
                  '& a': {
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }
                }}
              >
                Don't have an account?{' '}
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/register');
                  }}
                >
                  Register
                </a>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginScreen;