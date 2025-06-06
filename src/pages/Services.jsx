import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  useTheme,
} from '@mui/material';
import {
  CalendarMonth as CalendarMonthIcon,
  Church as ChurchIcon,
  Article as ArticleIcon,
  CardGiftcard as DonateIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Services() {
  const navigate = useNavigate();
  const theme = useTheme();

  const services = [
    {
      title: 'Mass and Events Schedule',
      description: 'Join us for Sunday worship and Fun events!',
      icon: <CalendarMonthIcon sx={{ fontSize: 40 }} />,
      path: '/mass-attendance',
      color: theme.palette.primary.light
    },
    {
      title: 'Apply for Ministry',
      description: 'Ready to Serve? Answer Your Calling with Our Ministry Program!',
      icon: <ChurchIcon sx={{ fontSize: 40 }} />,
      path: '/application-for-ministry',
      color: theme.palette.primary.light
    },
    {
      title: 'Baptismal',
      description: 'Ready to take the plunge? Sign up for our baptism class and dive into a meaningful journey of faith.',
      icon: <ArticleIcon sx={{ fontSize: 40 }} />,
      path: '/baptismal-certificate',
      color: theme.palette.primary.light
    },
    {
      title: 'Donate',
      description: 'Support our church\'s mission through your generous donations.',
      icon: <DonateIcon sx={{ fontSize: 40 }} />,
      path: '/donate',
      color: theme.palette.primary.light
    }
  ];

  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
        <img 
          src={logo}
          alt="Pamukid Presbyterian Church"
          style={{
            width: '150px',
            height: 'auto',
            marginBottom: '24px'
          }}
        />
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 2,
            color: 'text.primary',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Church Services
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 4,
            color: 'text.secondary',
            textAlign: 'center',
            maxWidth: '600px'
          }}
        >
          Access various church services and participate in our community activities
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <Card 
              onClick={() => navigate(service.path)}
              sx={{
                height: '100%',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[4]
                },
                bgcolor: theme.palette.background.paper,
                borderRadius: 2
              }}
            >
              <CardContent sx={{ 
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 2,
                height: '100%'
              }}>
                <Box 
                  sx={{ 
                    color: theme.palette.primary.main,
                    bgcolor: theme.palette.primary.light,
                    p: 1,
                    borderRadius: 1
                  }}
                >
                  {service.icon}
                </Box>
                
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 'bold',
                    color: 'text.primary'
                  }}
                >
                  {service.title}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    flexGrow: 1
                  }}
                >
                  {service.description}
                </Typography>

                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    mt: 2,
                    width: '100%',
                    '&:hover': {
                      bgcolor: theme.palette.primary.light,
                    }
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Paper sx={{ p: 3, bgcolor: theme.palette.background.paper }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
            Mass Schedule
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Sunday Mass
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  8:00 AM - 9:30 AM
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  10:00 AM - 11:30 AM
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  4:00 PM - 5:30 PM
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Weekday Mass
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Monday - Friday
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  6:00 AM - 7:00 AM
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  6:00 PM - 7:00 PM
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
} 