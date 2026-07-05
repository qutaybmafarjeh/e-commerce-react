import React, { useEffect } from 'react'
import authAxiosInstance from '../../api/authAxiosInstance';
import useAuthStore from '../../store/useAuthStore';

export default function Cart() {



  
  const getItems = async () => {

    const token = useAuthStore.getState((state) => state.token);
    console.log(token);



    try {
      const response = await authAxiosInstance.get('/carts');
      return response.data;
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  }

  useEffect(() => {
    getItems();
  }, [])


  return (
    <div>Cart</div>
  )
}
