import React from 'react';
import { Box, Card, CardActionArea, CardContent, CircularProgress, Container, Grid, Typography, Paper 
} from '@mui/material';
import { Link } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';
import { useTranslation } from 'react-i18next';

export default function Categories() {
  const { data, isLoading, isError, error } = useCategories();
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress size={48} />
      </Box>
    );
  }

  if (isError) {
    return (
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Paper elevation={0} sx={{ p: 4, textAlign: 'center', bgcolor: 'grey.50', borderRadius: 3 }}>
          <ErrorOutlineIcon color="error" sx={{ fontSize: 48, mb: 1 }} />
          <Typography variant="h6" color="error">
            {error?.message || String(error)}
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Box className="categories" component="section" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          component="h1" 
          fontWeight="700" 
          sx={{ textAlign: 'center', mb: 4 }}
        >
          {t('Categoires')}
        </Typography>

        <Grid container spacing={3}>
          {data?.response?.data?.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.id}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: 8,
                    bgcolor: 'primary.light',
                    color: 'primary.contrastText',
                  },
                }}
              >
                <CardActionArea
                  component={Link}
                  sx={{
                    height: '100%',
                    py: 3,
                    px: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                  }}
                >
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      fontWeight="600" 
                      sx={{ textAlign: 'center' }}
                    >
                      {category.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}