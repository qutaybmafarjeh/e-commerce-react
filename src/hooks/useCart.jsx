import React from 'react'
import { useQuery } from '@tanstack/react-query';


export default function useCart() {

    const getItem = async () => {

        const response = await authAxioxInstance.get('/Carts');
        return response.data;
    }

    return useQuery({
        queryKey: ['cart','en'],
        queryFn: getItem,
        staleTime: 1000 * 60 * 5,
    })


}