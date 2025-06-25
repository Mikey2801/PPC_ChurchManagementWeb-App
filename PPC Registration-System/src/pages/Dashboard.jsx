import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Sample data for the chart
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Registrations',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(25, 118, 210, 0.5)',
        borderColor: 'rgba(25, 118, 210, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Registrations',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  // Sample statistics data
  const stats = [
    { label: 'Total Registrations', value: '44' },
    { label: 'This Month', value: '3' },
    { label: 'Students', value: '28' },
    { label: 'Professionals', value: '16' },
  ];

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Statistics Cards */}
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h4" component="div" gutterBottom>
                {stat.value}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}

        {/* Chart */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ height: 400 }}>
              <Bar data={chartData} options={chartOptions} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard; 