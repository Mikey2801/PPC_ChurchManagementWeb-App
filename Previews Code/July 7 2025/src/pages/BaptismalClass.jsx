import React, { useState } from 'react';
import { Box, Typography, Paper, Button, Divider, Snackbar, Alert, TextField, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const classSchedules = [
  {
    name: 'Baptism Preparation Session - October 2024',
    date: '2024-10-20',
    time: '2:00 PM',
    venue: 'Church Hall',
  },
  // Add more schedules as needed
];

export default function BaptismalClass() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedClass) {
      setErrorMsg('Please select a class schedule.');
      setShowError(true);
      return;
    }
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <Box sx={{ maxWidth: 420, mx: 'auto', my: 2 }}>
      <Paper sx={{ p: 3, borderRadius: 4 }}>
        <Typography variant="h5" fontWeight="bold" align="center" sx={{ mb: 2 }}>
          Baptismal Class
        </Typography>
        <Divider sx={{ my: 2 }} />
        <form onSubmit={handleSubmit}>
          <TextField
            select
            label="Select Class Schedule"
            value={selectedClass}
            onChange={e => setSelectedClass(e.target.value)}
            fullWidth
            sx={{ mb: 3 }}
          >
            {classSchedules.map((cls, idx) => (
              <MenuItem key={idx} value={cls.name}>
                {cls.name} — {cls.date} at {cls.time} ({cls.venue})
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained" color="success" fullWidth>
            Request Schedule
          </Button>
        </form>
        <Snackbar
          open={showSuccess}
          autoHideDuration={2000}
          onClose={() => setShowSuccess(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="success" variant="filled">Request submitted! Pending approval.</Alert>
        </Snackbar>
        <Snackbar
          open={showError}
          autoHideDuration={2000}
          onClose={() => setShowError(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="error" variant="filled">{errorMsg}</Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
}
