import React from 'react';
import useProduct from '../../hooks/useProduct';
import {Box, Button, CircularProgress, Typography, Container, Grid, Paper, Stack, Chip, Divider 
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useParams } from 'react-router-dom';
import useAddToCart from '../../hooks/useAddToCart';

export default function ProductDetails() {
  const { id } = useParams();
  const { mutate: AddToCart } = useAddToCart();
  const { data, product, isLoading, isError, error } = useProduct(id);

 
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress size={48} />
      </Box>
    );
  }

  
  if (isError || !data?.response) {
    return (
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Paper elevation={0} sx={{ p: 4, textAlign: 'center', bgcolor: 'grey.50', borderRadius: 3 }}>
          <ErrorOutlineIcon color="error" sx={{ fontSize: 48, mb: 1 }} />
          <Typography variant="h6" color="text.secondary">
            {error?.message || 'Failed to load product details.'}
          </Typography>
        </Paper>
      </Container>
    );
  }

  const { name, description, price, image } = data.response;

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Paper elevation={2} sx={{ borderRadius: 4, overflow: 'hidden', p: { xs: 2, md: 4 } }}>
        <Grid container spacing={4} alignItems="center">
          
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: { xs: 300, md: 450 },
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                bgcolor: 'grey.50',
                borderRadius: 3,
                overflow: 'hidden',
                p: 2,
              }}
            >
              <Box
                component="img"
                src={image}
                alt={name}
                sx={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              />
            </Box>
          </Grid>

       
          <Grid item xs={12} md={6}>
            <Stack spacing={2.5}>
              <Box>
                <Chip label="In Stock" color="success" size="small" variant="outlined" sx={{ mb: 1.5 }} />
                <Typography variant="h4" component="h1" fontWeight="700" color="text.primary">
                  {name}
                </Typography>
              </Box>

              <Typography variant="h4" color="primary.main" fontWeight="700">
                ${price}
              </Typography>

              <Divider />

              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {description}
              </Typography>

              <Box sx={{ pt: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => AddToCart({ productId: data.response.id, count: 1 })}
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: 2.5,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    boxShadow: 2,
                    '&:hover': {
                      boxShadow: 4,
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Stack>
          </Grid>

        </Grid>
      </Paper>
    </Container>
  );
}