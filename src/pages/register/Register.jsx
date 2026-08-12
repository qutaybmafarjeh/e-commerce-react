import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { resgisterSchema } from '../validation/registerSchems';
import { useTranslation } from 'react-i18next';




export default function Register() {
  
  const [serverErrors, setServerErrors] = useState([]);
  const{t}=useTranslation();

 


      const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm(
        {
          resolver: yupResolver(resgisterSchema)
        }
      );
      const RegisterForm = async (data) => {
        try {
          const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`, data);
          return response.data;
        } catch (err) {
          setServerErrors(err.response.data.errors)
        }
      }


  return (
    <Box component="section" className="registerPage" sx={{mt:10}}>
      <Typography variant="h1" component="h3">
        {t('Register')}
      </Typography>
      <Typography variant="h6" component="h6">
      </Typography>

      {serverErrors?.length > 0? serverErrors.map((error) => 
         <Typography color='error'>{error}</Typography>
      ): ''}
     

      <Box onSubmit={handleSubmit(RegisterForm)} component="form" className="register__form" sx={{ display: 'flex',
         flexDirection: 'column', gap: 2, marginTop: 2 }}>
        <TextField label={t('Username')} {...register('userName')}  variant="outlined"
        error={errors.userName}
        helperText={errors.userName?.message}
        />
        <TextField label={t('Full Name')} {...register('fullName')} variant="outlined"
        error={errors.fullName}
        helperText={errors.fullName?.message}
        />
        <TextField label={t('Email')} {...register('email')}  variant="outlined"
        error={errors.email}
        helperText={errors.email?.message}
        />
        <TextField label={t('Phone Number')} {...register('phoneNumber')} variant="outlined"
        error={errors.phoneNumber}
        helperText={errors.phoneNumber?.message}
        />
        <TextField label={t('Password')} {...register('password')} variant="outlined"
        error={errors.password}
        helperText={errors.password?.message}
        />

          <Button variant="contained" type="submit" color="primary" disabled={isSubmitting}>
            {isSubmitting? <CircularProgress /> : t('Register')}
          </Button>

      </Box>

    </Box>
  )
}
