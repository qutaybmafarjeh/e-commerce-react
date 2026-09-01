import React from 'react';
import { Box, Container, Grid, Link, Typography, Divider, Stack } from '@mui/material';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#1a1a1a', 
        color: 'grey.400', 
        mt: 5, 
        pt: 6, 
        pb: 4 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifycontent="space-between">
          
          <Grid item="true" xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <img 
                src="./src/assets/images/image/KShop.png" 
                alt="KShop Logo" 
                style={{ width: '120px', height: 'auto', display: 'block' }} 
              />
            </Box>
            <Typography variant="body2" color="grey.500" sx={{ maxW: 300 }}>
              Your one-stop destination for quality shopping.
               Explore top categories and hot deals every day.
            </Typography>
          </Grid>

          <Grid item="true" xs={6} sm={4} md={2}>
            <Typography 
              variant="subtitle1" 
              color="white" 
              fontWeight="600" 
              sx={{ mb: 2 }}
            >
              Company
            </Typography>
            <Stack spacing={1.2}>
              <Link underline="hover" color="inherit" href="#" sx={{ '&:hover': { color: 'white' } }}>
                About us
              </Link>
              <Link underline="hover" color="inherit" href="#" sx={{ '&:hover': { color: 'white' } }}>
                Contact
              </Link>
              <Link underline="hover" color="inherit" href="#" sx={{ '&:hover': { color: 'white' } }}>
                Jobs
              </Link>
              <Link underline="hover" color="inherit" href="#" sx={{ '&:hover': { color: 'white' } }}>
                Press kit
              </Link>
            </Stack>
          </Grid>

          <Grid item="true" xs={6} sm={4} md={2}>
            <Typography 
              variant="subtitle1" 
              color="white" 
              fontWeight="600" 
              sx={{ mb: 2 }}
            >
              Legal
            </Typography>
            <Stack spacing={1.2}>
              <Link underline="hover" color="inherit" href="#" sx={{ '&:hover': { color: 'white' } }}>
                Terms of use
              </Link>
              <Link underline="hover" color="inherit" href="#" sx={{ '&:hover': { color: 'white' } }}>
                Privacy policy
              </Link>
              <Link underline="hover" color="inherit" href="#" sx={{ '&:hover': { color: 'white' } }}>
                Cookie Policy
              </Link>
            </Stack>
          </Grid>

          <Grid item="true" xs={12} sm={4} md={3}>
            <Typography 
              variant="subtitle1" 
              color="white" 
              fontWeight="600" 
              sx={{ mb: 2 }}
            >
              Social Media
            </Typography>
            <Stack direction="row" spacing={1.5} alignitems="center">
              <Link underline="none" href="#" sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>
                <img 
                  src="./src/assets/images/footer-image/x.jpg" 
                  alt="X" 
                  style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} 
                />
              </Link>
              <Link underline="none" href="#" sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>
                <img 
                  src="./src/assets/images/footer-image/facebook.jpg" 
                  alt="Facebook" 
                  style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} 
                />
              </Link>
              <Link underline="none" href="#" sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>
                <img 
                  src="./src/assets/images/footer-image/instagram.jpg" 
                  alt="Instagram" 
                  style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} 
                />
              </Link>
            </Stack>
          </Grid>

        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Typography variant="body2" color="grey.600" textalign="center">
          {currentYear} KShop. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}