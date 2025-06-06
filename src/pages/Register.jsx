import React, { useState, useEffect } from 'react';
import { Box, Container, TextField, Button, Typography, MenuItem, IconButton, InputAdornment, Stepper, Step, StepLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import phAddresses from '../data/ph-addresses.json';

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
    province: '',
    city: '',
    barangay: '',
    street: '',
    
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

  // Address cascading logic
  const [availableCities, setAvailableCities] = useState([]);
  const [availableBarangays, setAvailableBarangays] = useState([]);

  useEffect(() => {
    // Update cities when province changes
    const provinceObj = phAddresses.provinces.find(p => p.name === formData.province);
    setAvailableCities(provinceObj ? provinceObj.cities : []);
    setAvailableBarangays([]);
    setFormData(prev => ({ ...prev, city: '', barangay: '' }));
  }, [formData.province]);

  useEffect(() => {
    // Update barangays when city changes
    const provinceObj = phAddresses.provinces.find(p => p.name === formData.province);
    const cityObj = provinceObj && provinceObj.cities.find(c => c.name === formData.city);
    setAvailableBarangays(cityObj ? cityObj.barangays : []);
    setFormData(prev => ({ ...prev, barangay: '' }));
  }, [formData.city, formData.province]);

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
        name="province"
        label="Province"
        value={formData.province}
        onChange={handleChange}
        variant="outlined"
        placeholder="e.g. Laguna"
      />
      <TextField
        fullWidth
        name="city"
        label="City/Municipality"
        value={formData.city}
        onChange={handleChange}
        variant="outlined"
        placeholder="e.g. San Pablo City"
      />
      <TextField
        fullWidth
        name="barangay"
        label="Barangay"
        value={formData.barangay}
        onChange={handleChange}
        variant="outlined"
        placeholder="e.g. Barangay II-B"
      />
      <TextField
        fullWidth
        name="street"
        label="Street/Zone/Purok (optional)"
        value={formData.street}
        onChange={handleChange}
        variant="outlined"
        placeholder="House No., Street, Zone, Purok, etc."
      />

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