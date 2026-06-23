import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { CircleSharp } from '@mui/icons-material';




export default function Register() {
  
  const [serverErrors, setServerErrors] = useState([]);

  const resgisterSchema = yup.object({
    userName: yup.string().required().min(3).max(30),
    fullName: yup.string().required().min(3).max(30),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    password: yup.string().required()
  })


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
    <Box component="section" className="registerPage">
      <Typography variant="h1" component="h3">
        Register
      </Typography>

      {serverErrors?.length > 0? serverErrors.map((error) => 
         <Typography color='error'>{error}</Typography>
      ): ''}
     

      <Box onSubmit={handleSubmit(RegisterForm)} component="form" className="register__form" sx={{ display: 'flex',
         flexDirection: 'column', gap: 2, marginTop: 2 }}>
        <TextField label="Username" {...register('userName')}  variant="outlined"
        error={errors.userName}
        helperText={errors.userName?.message}
        />
        <TextField label="Full Name" {...register('fullName')} variant="outlined"
        error={errors.fullName}
        helperText={errors.fullName?.message}
        />
        <TextField label="Email" {...register('email')}  variant="outlined"
        error={errors.email}
        helperText={errors.email?.message}
        />
        <TextField label="PhoneNumber" {...register('phone')} variant="outlined"
        error={errors.phone}
        helperText={errors.phone?.message}
        />
        <TextField label="Password" {...register('password')} variant="outlined"
        error={errors.password}
        helperText={errors.password?.message}
        />

          <Button variant="contained" type="submit" color="primary" disabled={isSubmitting}>
            {isSubmitting? <CircularProgress /> : 'Register'}
          </Button>

      </Box>

    </Box>
  )
}
