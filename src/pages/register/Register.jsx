import React, { useState } from 'react';
import { Box, Button, CircularProgress, TextField, Typography, Container, Paper, Alert, Stack, InputAdornment, 
  IconButton, Link, Divider,Grid } from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { resgisterSchema } from '../validation/registerSchems';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

export default function Register() {
  const [serverErrors, setServerErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(resgisterSchema)
  });

  const RegisterForm = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`, data);
      return response.data;
    } catch (err) {
      setServerErrors(err.response?.data?.errors || [err.message]);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: { xs: 3, md: 5 }, 
          borderRadius: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}
      >
       
        <Box 
          sx={{ 
            m: 1, 
            bgcolor: 'primary.main', 
            color: 'white', 
            width: 48, 
            height: 48, 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}
        >
          <PersonAddOutlinedIcon />
        </Box>

        <Typography variant="h4" component="h1" fontWeight="700" sx={{ mb: 1 }}>
          {t('Register')}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
          Create an account to get started with KShop.
        </Typography>

        {serverErrors?.length > 0 && (
          <Stack spacing={1} sx={{ width: '100%', mb: 2 }}>
            {serverErrors.map((error, index) => (
              <Alert key={index} severity="error" sx={{ borderRadius: 2 }}>
                {error}
              </Alert>
            ))}
          </Stack>
        )}

        <Box 
          component="form" 
          onSubmit={handleSubmit(RegisterForm)} 
          noValidate 
          sx={{ width: '100%' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="userName"
                label={t('Username')}
                variant="outlined"
                {...register('userName')}
                error={Boolean(errors.userName)}
                helperText={errors.userName?.message}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="fullName"
                label={t('Full Name')}
                variant="outlined"
                {...register('fullName')}
                error={Boolean(errors.fullName)}
                helperText={errors.fullName?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label={t('Email')}
                type="email"
                variant="outlined"
                {...register('email')}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="phoneNumber"
                label={t('Phone Number')}
                variant="outlined"
                {...register('phoneNumber')}
                error={Boolean(errors.phoneNumber)}
                helperText={errors.phoneNumber?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                label={t('Password')}
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                {...register('password')}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            sx={{ 
              mt: 3,
              py: 1.5, 
              borderRadius: 2.5, 
              fontSize: '1rem', 
              fontWeight: 600, 
              textTransform: 'none',
              boxShadow: 2,
              '&:hover': { boxShadow: 4 },
              bgcolor:''
            }}
          >
            {isSubmitting ? <CircularProgress size={26} color="inherit" /> : t('Register')}
          </Button>
        </Box>

        <Divider sx={{ width: '100%', my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          Already have an account?{' '}
          <Link component={RouterLink} to="/login" underline="hover" color="primary" fontWeight="600">
            {t('Login')}
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}