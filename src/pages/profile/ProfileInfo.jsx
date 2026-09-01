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
  Button,
  Card,
  CardContent
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
import StarIcon from '@mui/icons-material/Star';

export default function ProfileInfo() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          mb: 4,
          borderRadius: 4,
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          color: 'common.white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
              <Avatar
                sx={{
                  width: 90,
                  height: 90,
                  bgcolor: 'primary.main',
                  color: 'common.white',
                  boxShadow: '0 0 20px rgba(25, 118, 210, 0.5)',
                  border: '3px solid rgba(255,255,255,0.2)'
                }}
              >
                <StorefrontIcon sx={{ fontSize: 46 }} />
              </Avatar>

              <Box sx={{ textalign: { xs: 'center', sm: 'left' } }}>
                <Stack direction="row" alignitems="center" spacing={1} justifycontent={{ xs: 'center', sm: 'flex-start' }}>
                  <Typography variant="h4" fontWeight="800" letterSpacing="-0.5px">
                    KShop
                  </Typography>
                  <VerifiedIcon color="primary" />
                  <Chip
                    label="Official Store"
                    size="small"
                    sx={{
                      bgcolor: 'rgba(46, 125, 50, 0.2)',
                      color: '#66bb6a',
                      border: '1px solid #4caf50',
                      fontWeight: 700
                    }}
                  />
                </Stack>
                <Typography variant="body1" sx={{ opacity: 0.8, mt: 0.5 }}>
                  Your Premium Online Shopping Destination
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'divider',
              height: '100%'
            }}
          >
            <Typography variant="h6" fontWeight="800" gutterBottom>
              About Our Store
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, mb: 4 }}>
              Welcome to KShop! We provide high-quality products curated for your daily lifestyle needs.
              From modern electronics to essential home items, our mission is focused on delivering top-tier 
              products paired with rapid shipping and dependable customer service.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="subtitle1" fontWeight="700" sx={{ mb: 2 }}>
              Why Shop With Us?
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Card elevation={0} sx={{ bgcolor: 'grey.50', borderRadius: 3, border: '1px solid', borderColor: 'grey.200' }}>
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <LocalShippingOutlinedIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                    <Typography variant="subtitle2" fontWeight="700">Fast Shipping</Typography>
                    <Typography variant="caption" color="text.secondary">Free delivery on bulk orders</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Card elevation={0} sx={{ bgcolor: 'grey.50', borderRadius: 3, border: '1px solid', borderColor: 'grey.200' }}>
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <ShieldOutlinedIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                    <Typography variant="subtitle2" fontWeight="700">Secure Payments</Typography>
                    <Typography variant="caption" color="text.secondary">100% Protected transactions</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Card elevation={0} sx={{ bgcolor: 'grey.50', borderRadius: 3, border: '1px solid', borderColor: 'grey.200' }}>
                  <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    <SupportAgentOutlinedIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
                    <Typography variant="subtitle2" fontWeight="700">24/7 Support</Typography>
                    <Typography variant="caption" color="text.secondary">Dedicated help team</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack spacing={3}>
            <Paper elevation={0} sx={{ p: 3.5, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="h6" fontWeight="800" gutterBottom sx={{ mb: 2 }}>
                Contact Information
              </Typography>
              <Stack spacing={2.5}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ p: 1, borderRadius: 2, bgcolor: 'primary.50', color: 'primary.main', display: 'flex' }}>
                    <EmailOutlinedIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" display="block">Email Address</Typography>
                    <Typography variant="body2" fontWeight="600">support@kshop.com</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ p: 1, borderRadius: 2, bgcolor: 'primary.50', color: 'primary.main', display: 'flex' }}>
                    <PhoneOutlinedIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" display="block">Phone Number</Typography>
                    <Typography variant="body2" fontWeight="600">+962 7 7718 7129</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ p: 1, borderRadius: 2, bgcolor: 'primary.50', color: 'primary.main', display: 'flex' }}>
                    <LocationOnOutlinedIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" display="block">Location</Typography>
                    <Typography variant="body2" fontWeight="600">Al-Salt, Jordan</Typography>
                  </Box>
                </Stack>
              </Stack>
            </Paper>

            <Paper elevation={0} sx={{ p: 3.5, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="h6" fontWeight="800" gutterBottom sx={{ mb: 2 }}>
                Business Hours
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <AccessTimeOutlinedIcon color="action" fontSize="small" />
                    <Typography variant="body2" color="text.secondary">Mon – Fri</Typography>
                  </Stack>
                  <Typography variant="body2" fontWeight="700">9:00 AM – 8:00 PM</Typography>
                </Stack>

                <Divider />

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <AccessTimeOutlinedIcon color="action" fontSize="small" />
                    <Typography variant="body2" color="text.secondary">Sat – Sun</Typography>
                  </Stack>
                  <Typography variant="body2" fontWeight="700">10:00 AM – 6:00 PM</Typography>
                </Stack>
              </Stack>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}