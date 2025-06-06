import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, MenuItem, IconButton, InputAdornment, Stepper, Step, StepLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    // Personal Information
    lastName: '',
    firstName: '',
    middleName: '',
    birthDate: '',
    gender: '',
    
    // Address
    street: '',
    city: '',
    province: '',
    
    // Contact
    phone: '',
    email: '',
    
    // Account
    username: '',
    password: '',
    confirmPassword: '',
    accountType: 'Member'
  });

  const steps = ['Personal Information', 'Create an account'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    navigate('/login');
  };

  const renderPersonalInfo = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Personal Information</Typography>
      
      <TextField
        fullWidth
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        variant="outlined"
      />

      <TextField
        fullWidth
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        variant="outlined"
      />

      <TextField
        fullWidth
        name="middleName"
        placeholder="Middle Name"
        value={formData.middleName}
        onChange={handleChange}
        variant="outlined"
      />

      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          fullWidth
          name="birthDate"
          type="date"
          placeholder="Birth of Date"
          value={formData.birthDate}
          onChange={handleChange}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          fullWidth
          select
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          variant="outlined"
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </TextField>
      </Box>

      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>Current Address</Typography>

      <TextField
        fullWidth
        select
        name="street"
        placeholder="Street/Barangay"
        value={formData.street}
        onChange={handleChange}
        variant="outlined"
      >
        <MenuItem value="street1">Street 1</MenuItem>
        <MenuItem value="street2">Street 2</MenuItem>
      </TextField>

      <TextField
        fullWidth
        select
        name="city"
        placeholder="Town/City"
        value={formData.city}
        onChange={handleChange}
        variant="outlined"
      >
        <MenuItem value="city1">City 1</MenuItem>
        <MenuItem value="city2">City 2</MenuItem>
      </TextField>

      <TextField
        fullWidth
        select
        name="province"
        placeholder="Province"
        value={formData.province}
        onChange={handleChange}
        variant="outlined"
      >
        <MenuItem value="province1">Province 1</MenuItem>
        <MenuItem value="province2">Province 2</MenuItem>
      </TextField>

      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>Contacts</Typography>

      <TextField
        fullWidth
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        variant="outlined"
      />

      <TextField
        fullWidth
        name="email"
        placeholder="Email Address (optional)"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
      />
    </Box>
  );

  const renderAccountCreation = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Create an account</Typography>

      <TextField
        fullWidth
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        variant="outlined"
      />

      <TextField
        fullWidth
        name="password"
        placeholder="Password"
        type={showPassword ? 'text' : 'password'}
        value={formData.password}
        onChange={handleChange}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        fullWidth
        name="confirmPassword"
        placeholder="Confirm Password"
        type={showPassword ? 'text' : 'password'}
        value={formData.confirmPassword}
        onChange={handleChange}
        variant="outlined"
      />

      <TextField
        select
        fullWidth
        name="accountType"
        value={formData.accountType}
        onChange={handleChange}
        variant="outlined"
      >
        <MenuItem value="Member">Member</MenuItem>
        <MenuItem value="Admin">Admin</MenuItem>
      </TextField>
    </Box>
  );

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        py: 4
      }}
    >
      <Container maxWidth="sm">
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
          }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              color: 'primary.main',
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 3
            }}
          >
            Registration Form
          </Typography>

          <Stepper activeStep={activeStep} sx={{ width: '100%', mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{ 
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            {activeStep === 0 ? renderPersonalInfo() : renderAccountCreation()}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button
                variant="outlined"
                onClick={activeStep === 0 ? () => navigate('/login') : handleBack}
                sx={{ px: 4 }}
              >
                {activeStep === 0 ? 'Previous' : 'Back'}
              </Button>
              
              <Button
                variant="contained"
                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                sx={{ px: 4 }}
              >
                {activeStep === steps.length - 1 ? 'Register' : 'Next'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Register; 