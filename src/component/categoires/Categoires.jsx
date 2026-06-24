import { CircularProgress, Typography } from '@mui/material';
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



export default function Categoires() {


    const getCategories = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BURL}/categories`,{
                headers: {
                    "Accept-Language": "en"
                }
            });
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
        staleTime: 1000 * 60 * 5,
    })

    if (isLoading) return <CircularProgress />
    
    if (isError) return <Typography color="error">{error}</Typography>
    



  return (
    console.log(data.response.data)
  )
}


