import React from 'react'
import useProduct from '../../hooks/useProduct';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useAddToCart from '../../hooks/useAddToCart';

export default function productDetails() {

  const{id} = useParams();

  const {mutate:AddToCart} = useAddToCart();

  const { data, product, isLoading, isError, error } = useProduct(id);

  if (isLoading) {
      return <CircularProgress />;
  }

  return (
    <Box>
        
        <Typography>name: {data.response.name}</Typography>
        <Typography>description: {data.response.description}</Typography>
        <Typography>price: {data.response.price}</Typography>
        <img src={data.response.image} alt={data.response.name} />

        <Button onClick={() => AddToCart(data.response.id, count, 1)}>Add to Cart</Button>
    </Box>
  )
}
