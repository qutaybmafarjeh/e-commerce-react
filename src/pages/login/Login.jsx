import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from '../validation/loginSchems';
import useAuthStore from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
 




export default function Login() {

  const navigator = useNavigate();
  
  
  const [serverErrors, setServerErrors] = useState([]);
  const setToken = useAuthStore((state) => state.setToken);
  const {t}=useTranslation();
  

  


      const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm(
        {
          resolver: yupResolver(loginSchema)
        }
      );
      const LoginForm = async (data) => {
        try {
          const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Login`, data);
        
          setToken(response.data.accessToken);
          navigator('/');
          
        } catch (err) {
          setServerErrors(err.response?.data?.errors || [err.message]);
        }
      }
     

  return (
    <Box component="section" className="loginPage">
      <Typography variant="h1" component="h3">
        {t('Login')}
      </Typography>

      {serverErrors?.length > 0? serverErrors.map((error) => 
         <Typography color='error'>{error}</Typography>
      ): ''}
     

      <Box onSubmit={handleSubmit(LoginForm)} component="form" className="login__form" sx={{ display: 'flex',
         flexDirection: 'column', gap: 2, marginTop: 2 }}>

        <TextField label={t('Email')} {...register('email')}  variant="outlined"
        error={errors.email}
        helperText={errors.email?.message}
        />
       
        <TextField label={t('Password')} {...register('password')} variant="outlined"
        error={errors.password}
        helperText={errors.password?.message}
        />

         <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress size={24} /> : t('Login')}
        </Button>

      </Box>

    </Box>
  )
}
