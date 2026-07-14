import { useMutation } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance'

export default function useAddToCart() {
  
    return useMutation({
        mutationFn: async (productId, count ) => {
            return await authAxiosInstance.post('/cart',{
                ProductId: productId,
                Count: count
            });

        }
    });


}
