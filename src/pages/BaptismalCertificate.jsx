import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Alert,
  Snackbar,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon, Send as SendIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function BaptismalCertificate() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    baptismDate: '',
    parentNames: '',
    email: '',
    phone: '',
    purpose: '',
  });

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = {
      firstName: 'First Name',
      lastName: 'Last Name',
      birthDate: 'Date of Birth',
      baptismDate: 'Date of Baptism',
      parentNames: 'Parent Names',
      email: 'Email',
      phone: 'Phone Number',
      purpose: 'Purpose',
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([key]) => !formData[key])
      .map(([, label]) => label);

    if (missingFields.length > 0) {
      alert(`Please fill in the following required fields:\n${missingFields.join('\n')}`);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Phone validation (Philippines)
    const phoneRegex = /^(\+63|0)[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      alert('Please enter a valid Philippine phone number (+63 or 0 followed by 10 digits)');
      return;
    }

    setShowSuccess(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <Box sx={{ py: 3 }}>
        <Paper sx={{ p: 3, mb: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <img 
            src={logo}
            alt="Pamukid Presbyterian Church"
            style={{
              width: '150px',
              height: 'auto',
              marginBottom: '24px'
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Typography variant="h4">Request Baptismal Certificate</Typography>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/dashboard')}
            >
              Back to Dashboard
            </Button>
          </Box>
          </Box>

          <Typography variant="body1" color="text.secondary" paragraph>
          Please fill out the form below to request your baptismal certificate.
          We will process your request and contact you when it's ready.
          </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="First Name"
                value={formData.firstName}
                onChange={handleChange('firstName')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange('lastName')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Date of Birth"
                type="date"
                value={formData.birthDate}
                onChange={handleChange('birthDate')}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Date of Baptism"
                type="date"
                value={formData.baptismDate}
                onChange={handleChange('baptismDate')}
                InputLabelProps={{ shrink: true }}
                helperText="Approximate date if exact date is unknown"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Parent Names"
                value={formData.parentNames}
                onChange={handleChange('parentNames')}
                helperText="Full names of both parents"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                required
                label="Phone Number"
                value={formData.phone}
                onChange={handleChange('phone')}
                placeholder="+63 XXX XXX XXXX"
                helperText="Format: +63 or 0 followed by 10 digits"
                />
              </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                multiline
                rows={3}
                label="Purpose of Request"
                value={formData.purpose}
                onChange={handleChange('purpose')}
                helperText="Please specify why you need the baptismal certificate"
              />
          </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
                  startIcon={<SendIcon />}
            >
              Submit Request
            </Button>
          </Box>
            </Grid>
          </Grid>
        </Box>

        <Snackbar
          open={showSuccess}
          autoHideDuration={2000}
          onClose={() => setShowSuccess(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="success" sx={{ width: '100%' }}>
            Baptismal certificate request submitted successfully!
          </Alert>
        </Snackbar>
      </Paper>
      </Box>
  );
} 