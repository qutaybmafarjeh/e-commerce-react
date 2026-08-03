import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/useAuthStore';
import { Box, MenuIcon } from 'lucide-react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18next';


export default function Navbar() {

  const navigator = useNavigate();
  const token = useAuthStore((state) => state.token);
  const Logout = useAuthStore((state) => state.Logout);
  const {t}=useTranslation();
  const changeLanguage= (lang) => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  }

  const handleLogout = () => {
    Logout();
    navigator('/login');
  }



  return (
    
    <nav sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{display:'flex', gap: 2, justifyContent:'center', alignItems:'center'}}>
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 ,display: { xs: 'block', sm: 'none' }}}
          >
            <MenuIcon/>
          </IconButton >
          <Typography variant="h5" component="header" sx={{display:'flex', gap: 2, justifyContent:'center',
           alignItems:'center'
          }} >
          <Link to="/">{t('Home')}</Link>
          <Link to="/product">{t('Product')}</Link>
          {token ? <>
            <Link to="/login" component="button" onClick={handleLogout}>
              {t('Logout')}
            </Link>
            <Link to="/cart">{t('Cart')}</Link>
          </> : <>
            <Link to="/login">{t('Login')}</Link>
            <Link to="/register">{t('Register')}</Link>
          </>
          }
          </Typography>
          <Button color="inherit" onClick={() => changeLanguage()}>
            {i18n.language === 'en' ? 'AR' : 'EN'}
          </Button>
        </Toolbar>
      </AppBar>
    </nav>
  );
}
