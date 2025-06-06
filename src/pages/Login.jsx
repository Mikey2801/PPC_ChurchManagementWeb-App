import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, MenuItem, IconButton, InputAdornment, Paper } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userType: 'Member',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    if (formData.userType === 'Admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/dashboard');
    }
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
            {/* User Type Selector */}
            <TextField
              select
              fullWidth
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              variant="outlined"
              size="small"
              sx={{ 
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1
                }
              }}
            >
              <MenuItem value="Member">Member</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </TextField>

            {/* Username Field */}
            <TextField
              fullWidth
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              variant="outlined"
              size="small"
              required
              sx={{ 
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1
                }
              }}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              name="password"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              size="small"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ 
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1
                }
              }}
            />

            {/* Login Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ 
                mt: 2,
                py: 1,
                borderRadius: 1,
                bgcolor: '#4caf50',
                '&:hover': {
                  bgcolor: '#43a047'
                }
              }}
            >
              Login
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