import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useCategories from '../../hooks/useCategories';



export default function Categoires() {


    const { data, isLoading, isError, error } = useCategories();
    if (isLoading) return <CircularProgress />
    
    if (isError) return <Typography color="error">{error}</Typography>
    



  return (
   <div> {data.response.data.map((category) => (
       <Box> <Typography>{category.name} </Typography>
       <Typography>{category.id}</Typography>
       </Box>
    ))}
  </div>
  )
}


