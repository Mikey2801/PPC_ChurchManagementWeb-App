import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon, Send as SendIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const massSchedules = [
  { time: '06:00', period: 'AM' },
  { time: '08:00', period: 'AM' },
  { time: '10:00', period: 'AM' },
  { time: '04:00', period: 'PM' },
  { time: '06:00', period: 'PM' },
];

export default function MassAttendance() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    schedule: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    numberOfAttendees: '1',
    withFamily: false,
    specialNeeds: '',
  });

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: field === 'withFamily' ? event.target.checked : event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = {
      date: 'Date',
      schedule: 'Mass Schedule',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone Number',
      numberOfAttendees: 'Number of Attendees',
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

    // Validate number of attendees
    const attendees = parseInt(formData.numberOfAttendees);
    if (isNaN(attendees) || attendees < 1 || attendees > 10) {
      alert('Please enter a valid number of attendees (1-10)');
      return;
    }

    setShowSuccess(true);
    setTimeout(() => {
      navigate('/services');
    }, 2000);
  };

  // Get tomorrow's date as the minimum selectable date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  // Get date 2 weeks from tomorrow as the maximum selectable date
  const maxDate = new Date();
  maxDate.setDate(tomorrow.getDate() + 14);
  const maxDateStr = maxDate.toISOString().split('T')[0];

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
            <Typography variant="h4">Mass Attendance Registration</Typography>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/services')}
            >
              Back to Services
            </Button>
          </Box>
        </Box>

        <Typography variant="body1" color="text.secondary" paragraph>
          Please fill out the form below to register for mass attendance.
          Registration is required for proper social distancing and contact tracing.
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Date"
                type="date"
                value={formData.date}
                onChange={handleChange('date')}
                InputLabelProps={{ shrink: true }}
                inputProps={{
                  min: minDate,
                  max: maxDateStr,
                }}
                helperText="Select a date within the next 2 weeks"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Mass Schedule</InputLabel>
                <Select
                  value={formData.schedule}
                  onChange={handleChange('schedule')}
                  label="Mass Schedule"
                >
                  {massSchedules.map(({ time, period }) => (
                    <MenuItem key={`${time}${period}`} value={`${time} ${period}`}>
                      {time} {period}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
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
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Number of Attendees"
                type="number"
                value={formData.numberOfAttendees}
                onChange={handleChange('numberOfAttendees')}
                inputProps={{ min: 1, max: 10 }}
                helperText="Maximum of 10 attendees per registration"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.withFamily}
                    onChange={handleChange('withFamily')}
                    color="primary"
                  />
                }
                label="Attending with family members"
                sx={{ mt: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Special Needs or Requests (Optional)"
                value={formData.specialNeeds}
                onChange={handleChange('specialNeeds')}
                helperText="Please specify any special assistance or seating requirements"
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
                  Register Attendance
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Snackbar
        open={showSuccess}
        autoHideDuration={2000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Mass attendance registration submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
} 