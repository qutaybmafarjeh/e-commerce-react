import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';

export default function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values) => {
      const response = await authAxiosInstance.post('/Carts', {
        ProductId: values.productId,
        Count: values.count
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ['cart'] 
      });
    }
  });
}