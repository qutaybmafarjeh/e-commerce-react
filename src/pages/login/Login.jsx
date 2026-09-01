import React, { useState } from 'react';
import { Box, Button, CircularProgress, TextField, Typography, Container, Paper, Alert, Stack, InputAdornment,
  IconButton, Link, Divider } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from '../validation/loginSchems';
import useAuthStore from '../../store/useAuthStore';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const navigator = useNavigate();
  const [serverErrors, setServerErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const setToken = useAuthStore((state) => state.state || state.setToken ? state.setToken : state);
  const { t } = useTranslation();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const LoginForm = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Login`, data);
      setToken(response.data.accessToken);
      navigator('/');
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
          <LockOutlinedIcon />
        </Box>

        <Typography variant="h4" component="h1" fontWeight="700" sx={{ mb: 1 }}>
          {t('Login')}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {t('Sign in to your account')}
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
          onSubmit={handleSubmit(LoginForm)}
          noValidate
          sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2.5 }}
        >
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

          <TextField
            fullWidth
            id="password"
            label={t('Password')}
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            {...register('password')}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            inputprops={{
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            sx={{
              py: 1.5,
              borderRadius: 2.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: 2,
              '&:hover': { boxShadow: 4 }
            }}
          >
            {isSubmitting ? <CircularProgress size={26} color="inherit" /> : t('Login')}
          </Button>
        </Box>

        <Divider sx={{ width: '100%', my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          {t('Don\'t have an account?')}{' '}
          <Link component={RouterLink} to="/register" underline="hover" color="primary" fontWeight="600">
            {t('Register')}
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}