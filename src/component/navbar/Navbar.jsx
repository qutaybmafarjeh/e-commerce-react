import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/useAuthStore';
import { Box, MenuIcon } from 'lucide-react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';


export default function Navbar() {

  const navigator = useNavigate();
  const token = useAuthStore((state) => state.token);
  const Logout = useAuthStore((state) => state.Logout);

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
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          {token ? <>
            <Link to="/login" component="button" onClick={handleLogout}>
              Logout
            </Link>
            <Link to="/cart">Cart</Link>
          </> : <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
          }
          </Typography>
        </Toolbar>
      </AppBar>
    </nav>
  );
}
