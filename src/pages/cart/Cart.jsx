import React, { useEffect } from 'react'
import authAxiosInstance from '../../api/authAxiosInstance';

export default function Cart() {



  
  const getItems = async () => {
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
