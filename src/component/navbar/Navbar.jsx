import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';
import useThemeStore from '../../store/useThemeStore';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18next';
import {
  AppBar, Toolbar, Box, Button, IconButton, Container, Drawer, List, ListItem, ListItemButton, ListItemText, Divider,
  Switch, styled, useTheme, Stack
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));

export default function Navbar() {
  const navigator = useNavigate();
  const token = useAuthStore((state) => state.token);
  const Logout = useAuthStore((state) => state.Logout);
  const { t } = useTranslation();
  const { mode, toggleMode } = useThemeStore();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  const handleLogout = () => {
    Logout();
    navigator('/login');
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const drawerContent = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pb: 1 }}>
        <Box component="img" src="./src/assets/images/image/KShop.png" alt="Logo" sx={{ width: 80 }} />
        <IconButton size="small">
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary={t('Home')} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/product">
            <ListItemText primary={t('Shop')} />
          </ListItemButton>
        </ListItem>

        {token ? (
          <>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/cart">
                <ListItemText primary={t('Cart')} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/profile">
                <ListItemText primary={t('Profile')} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemText primary={t('Logout')} sx={{ color: 'error.main' }} />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/login">
                <ListItemText primary={t('Login')} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/register">
                <ListItemText primary={t('Register')} />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.85)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(8px)',
        color: 'text.primary',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 70 }}>


          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexGrow: { xs: 1, sm: 0 },
            }}
          >
            <Box
              component="img"
              src="./src/assets/images/image/KShop.png"
              alt="KShop Logo"
              sx={{ height: 40, width: 'auto', objectFit: 'contain' }}
            />
          </Box>


          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
            }}
          >
            <Button component={Link} to="/" color="inherit" sx={{ fontWeight: 500 }}>
              {t('Home')}
            </Button>
            <Button component={Link} to="/product" color="inherit" sx={{ fontWeight: 500 }}>
              {t('Shop')}
            </Button>

            {token ? (
              <>
                <Button component={Link} to="/cart" color="inherit" sx={{ fontWeight: 500 }}>
                  {t('Cart')}
                </Button>
                <Button component={Link} to="/profile" color="inherit" sx={{ fontWeight: 500 }}>
                  {t('About Us')}
                </Button>
                <Button
                  onClick={handleLogout}
                  variant="outlined"
                  color="error"
                  size="small"
                  sx={{ ml: 1, borderRadius: 2 }}
                >
                  {t('Logout')}
                </Button>
              </>
            ) : (
              <>
                <Button component={Link} to="/login" color="inherit" sx={{ fontWeight: 500 }}>
                  {t('Login')}
                </Button>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ borderRadius: 2, px: 2 }}
                >
                  {t('Register')}
                </Button>
              </>
            )}
          </Stack>


          <Stack direction="row" spacing={1} alignitems="center">
            <Button
              onClick={changeLanguage}
              size="small"
              variant="outlined"
              color="inherit"
              sx={{
                borderRadius: 2,
                minWidth: 42,
                px: 1.5,
                fontWeight: 600,
                borderColor: theme.palette.divider,
              }}
            >
              {i18n.language === 'en' ? 'AR' : 'EN'}
            </Button>

            <MaterialUISwitch
              checked={mode === 'dark'}
              onChange={toggleMode}
              inputprops={{ 'aria-label': 'theme toggle' }}
            />
          </Stack>
        </Toolbar>
      </Container>


      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
}