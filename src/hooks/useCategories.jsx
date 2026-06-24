import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../api/axiosInstance';

export default function useCategories() {

    const getCategories = async () => {
        try {
            const response = await axiosInstance.get('/categories')
           
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }

    const query = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
        staleTime: 1000 * 60 * 5,
    })



  return query;
}
