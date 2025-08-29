import React from 'react';
import { Box, Container, Typography, Grid, Avatar } from '@mui/material';

const teamMembers = [
  {
    name: 'Michael Relunia',
    role: 'PASTOR',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis diam, fringilla nec nisl et, fringilla molestie turpis. Maecenas in lectus neque. Nam at nibh sit amet ante pellentesque consectetur non eget nisi.'
  },
  {
    name: 'Michael Relunia',
    role: 'REV',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis diam, fringilla nec nisl et, fringilla molestie turpis. Maecenas in lectus neque. Nam at nibh sit amet ante pellentesque consectetur non eget nisi.'
  },
  {
    name: 'Michael Relunia',
    role: 'MINISTRY DIRECTOR',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis diam, fringilla nec nisl et, fringilla molestie turpis. Maecenas in lectus neque. Nam at nibh sit amet ante pellentesque consectetur non eget nisi.'
  },
  {
    name: 'Michael Relunia',
    role: 'CHILDREN MINISTRY DIRECTOR',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis diam, fringilla nec nisl et, fringilla molestie turpis. Maecenas in lectus neque. Nam at nibh sit amet ante pellentesque consectetur non eget nisi.'
  },
  {
    name: 'Michael Relunia',
    role: 'MUSIC DIRECTOR',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis diam, fringilla nec nisl et, fringilla molestie turpis. Maecenas in lectus neque. Nam at nibh sit amet ante pellentesque consectetur non eget nisi.'
  }
];

const OurTeam = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom align="center">
          Our Team
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: 'grey.200'
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{ color: 'text.secondary', fontWeight: 'bold' }}
                >
                  {member.role}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {member.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurTeam; 