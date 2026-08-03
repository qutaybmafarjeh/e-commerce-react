import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useCategories from '../../hooks/useCategories';
import { useTranslation } from 'react-i18next';



export default function Categoires() {


    const { data, isLoading, isError, error } = useCategories();
    const {t}=useTranslation();

    if (isLoading) return <CircularProgress />
    
    if (isError) return <Typography color="red">{error}</Typography>
  
    



  return (
    <Box>
    <Typography>{t('Categories')}</Typography>
   <div> {data.response.data.map((category) => (
       <Box> <Typography>{category.name} </Typography>
       <Typography>{category.id}</Typography>
       </Box>
    ))}
  </div>
  </Box>
  )
}


