import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const images = [
  './src/assets/images/new-product/tv.jpg', 
  './src/assets/images/new-product/ps5.jpg', 
  './src/assets/images/new-product/pc.jpg', 
  './src/assets/images/new-product/coffee-machine.jpg', 
];

export default function NewProducts() {
    const { t } = useTranslation();
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" fontWeight="700" sx={{ mb: 4 }}>
       {t('New Products')}
      </Typography>

      <Grid container spacing={2}>
     
        <Grid item="true" xs={12} md={5}>
          <Paper
            elevation={2}
            sx={{
              height: { xs: 300, md: 516 },
              borderRadius: 3,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={images[0]}
              alt="Main Product"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            />
          </Paper>
        </Grid>

        <Grid item="true" xs={12} md={7}>
          <Grid container spacing={2}>
            
            <Grid item="true" xs={6}>
              <Paper
                elevation={2}
                sx={{
                  height: 250,
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={images[1]}
                  alt="Product 2"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />
              </Paper>
            </Grid>

            <Grid item="true" xs={6}>
              <Paper
                elevation={2}
                sx={{
                  height: 250,
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={images[2]}
                  alt="Product 3"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />
              </Paper>
            </Grid>

            <Grid item="true" xs={12}>
              <Paper
                elevation={2}
                sx={{
                  height: 250,
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={images[3]}
                  alt="Product 4"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />
              </Paper>
            </Grid>

          </Grid>
        </Grid>

      </Grid>
    </Container>
  );
}