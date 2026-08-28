import { Typography, Box, Container, Paper, Stack } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function ProfileLayout() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 10 }}>
      <Stack direction="row" alignitems="center" justifycontent="center" spacing={1.5} sx={{ mb: 4 }}>
        <Typography variant="h3" fontWeight="800" textalign="center" color="text.primary">
          {t('About Us')}
        </Typography>
      </Stack>
      <Paper
        elevation={0}
        sx={{
          p: 0.75,
          mb: 4,
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'action.hover',
          maxWidth: 400,
          mx: 'auto'
        }}
      >
        <Stack direction="row" spacing={1}>
          <Box
            component={NavLink}
            to=""
            end
            sx={{
              flex: 1,
              display: 'flex',
              alignitems: 'center',
              justifycontent: 'center',
              gap: 1,
              py: 1.25,
              px: 3,
              borderRadius: 2.5,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: 'text.secondary',
              transition: 'all 0.2s ease-in-out',
              '&.active': {
                bgcolor: 'background.paper',
                color: 'primary.main',
                boxShadow: 1
              },
              '&:hover:not(.active)': {
                color: 'text.primary',
                bgcolor: 'action.selected'
              }
            }}
          >
            <InfoOutlinedIcon fontSize="small" />
            {t('Info')}
          </Box>

          <Box
            component={NavLink}
            to="orders"
            sx={{
              flex: 1,
              display: 'flex',
              alignitems: 'center',
              justifycontent: 'center',
              gap: 1,
              py: 1.25,
              px: 3,
              borderRadius: 2.5,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: 'text.secondary',
              transition: 'all 0.2s ease-in-out',
              '&.active': {
                bgcolor: 'background.paper',
                color: 'primary.main',
                boxShadow: 1
              },
              '&:hover:not(.active)': {
                color: 'text.primary',
                bgcolor: 'action.selected'
              }
            }}
          >
            <ShoppingBagOutlinedIcon fontSize="small" />
            {t('Orders')}
          </Box>
        </Stack>
      </Paper>
      <Box sx={{ minHeight: '400px' }}>
        <Outlet />
      </Box>
    </Container>
  );
}