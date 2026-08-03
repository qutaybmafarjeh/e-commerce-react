import { useQuery } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';


export default function useCart() {

    const getItems = async () => {
        const response = await authAxiosInstance.get('/Carts');
        return response.data;
    }

    return useQuery({
        queryKey: ['cart', 'en'],
        queryFn: getItems,
        staleTime: 1000 * 60 * 5,
    })


}
