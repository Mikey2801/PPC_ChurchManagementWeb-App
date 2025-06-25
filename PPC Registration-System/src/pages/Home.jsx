import React from 'react';
import { Typography, Paper, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Welcome to PPC Registration System
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Register Now
            </Typography>
            <Typography paragraph>
              Quick and easy registration process for all participants.
              Get started with our simple registration form.
            </Typography>
            <Button
              component={Link}
              to="/registration"
              variant="contained"
              color="primary"
              size="large"
            >
              Start Registration
            </Button>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              View Dashboard
            </Typography>
            <Typography paragraph>
              Access registration statistics and manage your data
              through our comprehensive dashboard.
            </Typography>
            <Button
              component={Link}
              to="/dashboard"
              variant="outlined"
              color="primary"
              size="large"
            >
              Go to Dashboard
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home; 