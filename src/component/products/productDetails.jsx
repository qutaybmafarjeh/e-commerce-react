import React from 'react'
import useProduct from '../../hooks/useProduct';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function productDetails() {

  const{id} = useParams();

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
    </Box>
  )
}
