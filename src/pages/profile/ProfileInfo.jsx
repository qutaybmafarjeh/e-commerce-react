import React from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Avatar,
  Chip,
  Divider,
  Stack,
  Button
} from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

export default function ProfileInfo() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            height: 140,
            bgcolor: 'primary.main',
            backgroundImage: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
            position: 'relative'
          }}
        />
        <Box sx={{ px: { xs: 3, sm: 4 }, pb: 3, pt: 0, position: 'relative' }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ xs: 'center', sm: 'flex-end' }}
            sx={{ mt: -6, mb: 3 }}
          >
            <Avatar
              sx={{
                width: 100,
                height: 100,
                bgcolor: 'common.white',
                color: 'primary.main',
                boxShadow: 3,
                border: '4px solid white'
              }}
            >
              <StorefrontIcon sx={{ fontSize: 50 }} />
            </Avatar>

            <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, flexGrow: 1 }}>
              <Stack direction="row" alignItems="center" spacing={1} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                <Typography variant="h5" fontWeight="800">
                  KShop
                </Typography>
                <VerifiedIcon color="primary" fontSize="small" />
              </Stack>
              <Typography variant="body2" color="text.secondary">
                Your Premium Online Shopping Destination
              </Typography>
            </Box>

            <Chip
              label="Official Store"
              color="success"
              variant="outlined"
              size="small"
              sx={{ fontWeight: 600 }}
            />
          </Stack>

          <Divider sx={{ my: 3 }} />
          <Typography variant="h6" fontWeight="700" gutterBottom>
            About KShop
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
            Welcome to KShop! We provide high-quality products curated for your daily lifestyle needs.
            From electronics to daily essentials, we focus on delivering top-tier items with rapid delivery
            and dependable customer care.
          </Typography>
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12} sm={4}>
              <Paper elevation={0} sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <LocalShippingOutlinedIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2" fontWeight="700">
                      Fast Shipping
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Free delivery on bulk orders
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Paper elevation={0} sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <ShieldOutlinedIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2" fontWeight="700">
                      Secure Checkout
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      100% Protected payments
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Paper elevation={0} sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <SupportAgentOutlinedIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2" fontWeight="700">
                      24/7 Support
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Dedicated customer team
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" fontWeight="700" gutterBottom>
                Contact Details
              </Typography>
              <Stack spacing={2} sx={{ mt: 1.5 }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <EmailOutlinedIcon color="action" fontSize="small" />
                  <Typography variant="body2" color="text.secondary">
                    support@kshop.com
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <PhoneOutlinedIcon color="action" fontSize="small" />
                  <Typography variant="body2" color="text.secondary">
                    +962777187129
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <LocationOnOutlinedIcon color="action" fontSize="small" />
                  <Typography variant="body2" color="text.secondary">
                    Jordan / Al-Salt
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" fontWeight="700" gutterBottom>
                Working Hours
              </Typography>
              <Stack spacing={2} sx={{ mt: 1.5 }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <AccessTimeOutlinedIcon color="action" fontSize="small" />
                  <Typography variant="body2" color="text.secondary">
                    Monday – Friday: 9:00 AM – 8:00 PM
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <AccessTimeOutlinedIcon color="action" fontSize="small" />
                  <Typography variant="body2" color="text.secondary">
                    Saturday – Sunday: 10:00 AM – 6:00 PM
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}