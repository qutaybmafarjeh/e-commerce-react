import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  Stack,
  Divider,
  Avatar,
  CircularProgress,
  Badge,
  Grid,
  Card,
  CardContent,
  Collapse,
  IconButton
} from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AutoRenewIcon from '@mui/icons-material/AutoRenew';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useTranslation } from 'react-i18next';

export default function ProfileOrders() {
  const { t } = useTranslation();

  const ordersData = null;
  const isLoading = false;
  const isError = false;

  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');

  const toggleExpand = (id) => {
    setExpandedOrderId((prev) => (prev === id ? null : id));
  };

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
      case 'completed':
        return (
          <Chip
            icon={<CheckCircleTwoToneIcon fontSize="small" />}
            label={t('Delivered')}
            color="success"
            size="small"
            sx={{ fontWeight: 700, borderRadius: 2 }}
          />
        );
      case 'shipped':
      case 'in_transit':
        return (
          <Chip
            icon={<LocalShippingTwoToneIcon fontSize="small" />}
            label={t('Shipped')}
            color="info"
            size="small"
            sx={{ fontWeight: 700, borderRadius: 2 }}
          />
        );
      case 'processing':
      case 'pending':
      default:
        return (
          <Chip
            icon={<AccessTimeTwoToneIcon fontSize="small" />}
            label={t('Processing')}
            color="warning"
            size="small"
            sx={{ fontWeight: 700, borderRadius: 2 }}
          />
        );
    }
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
        <CircularProgress size={40} thickness={4} />
      </Box>
    );
  }

  const orders = ordersData?.orders || [
    {
      id: 'ORD-98231',
      date: 'Aug 15, 2026',
      status: 'delivered',
      totalPrice: 619.0,
      paymentMethod: 'Visa',
      items: [
        { id: '101', productName: 'Wireless Noise-Canceling Headphones', count: 1, price: 120.0 },
        { id: '102', productName: 'PlayStation 5 Console', count: 1, price: 499.0 }
      ]
    },
    {
      id: 'ORD-98104',
      date: 'Aug 22, 2026',
      status: 'shipped',
      totalPrice: 89.99,
      paymentMethod: 'Cash on Delivery',
      items: [{ id: '103', productName: 'Ergonomic Gaming Mouse', count: 1, price: 89.99 }]
    }
  ];
  const totalSpent = orders.reduce((sum, o) => sum + o.totalPrice, 0);
  const deliveredCount = orders.filter((o) => o.status === 'delivered').length;
  const inTransitCount = orders.filter((o) => o.status === 'shipped').length;

  const filteredOrders = statusFilter === 'all' 
    ? orders 
    : orders.filter((o) => o.status === statusFilter);

  return (
    <Grid container spacing={3.5}>
      <Grid item xs={12} md={8}>
        <Stack spacing={2.5}>
          <Paper elevation={0} sx={{ p: 2, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Stack direction="row" alignItems="center" spacing={1}>
                <FilterListIcon color="action" fontSize="small" />
                <Typography variant="subtitle2" fontWeight="700">
                  {t('Filter Orders')}:
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                {['all', 'shipped', 'delivered'].map((filter) => (
                  <Chip
                    key={filter}
                    label={filter.charAt(0).toUpperCase() + filter.slice(1)}
                    size="small"
                    onClick={() => setStatusFilter(filter)}
                    color={statusFilter === filter ? 'primary' : 'default'}
                    variant={statusFilter === filter ? 'filled' : 'outlined'}
                    sx={{ fontWeight: 600, cursor: 'pointer' }}
                  />
                ))}
              </Stack>
            </Stack>
          </Paper>
          {isError || filteredOrders.length === 0 ? (
            <Paper
              elevation={0}
              sx={{
                p: 6,
                textAlign: 'center',
                borderRadius: 4,
                border: '1px dashed',
                borderColor: 'divider',
                bgcolor: 'background.paper'
              }}
            >
              <ShoppingBagOutlinedIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
              <Typography variant="h6" color="text.secondary" gutterBottom>
                {t('No orders found')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('Your recent purchase history for this status will appear here.')}
              </Typography>
            </Paper>
          ) : (
            filteredOrders.map((order) => {
              const isExpanded = expandedOrderId === order.id;

              return (
                <Paper
                  key={order.id}
                  elevation={0}
                  sx={{
                    borderRadius: 3.5,
                    border: '1px solid',
                    borderColor: isExpanded ? 'primary.main' : 'divider',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      boxShadow: '0px 6px 24px rgba(0, 0, 0, 0.06)'
                    }
                  }}
                >
                  <Box sx={{ p: 2.5, bgcolor: 'background.paper' }}>
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      justifyContent="space-between"
                      alignItems={{ xs: 'flex-start', sm: 'center' }}
                      spacing={2}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar
                          sx={{
                            bgcolor: 'primary.50',
                            color: 'primary.main',
                            width: 46,
                            height: 46,
                            borderRadius: 2.5
                          }}
                        >
                          <ReceiptLongOutlinedIcon />
                        </Avatar>
                        <Box>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Typography variant="subtitle1" fontWeight="800">
                              {order.id}
                            </Typography>
                            {getStatusBadge(order.status)}
                          </Stack>
                          <Typography variant="caption" color="text.secondary">
                            {t('Ordered on')} {order.date} • {t('Payment')}: {order.paymentMethod}
                          </Typography>
                        </Box>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing={3}
                        alignItems="center"
                        justifyContent={{ xs: 'space-between', sm: 'flex-end' }}
                        sx={{ width: { xs: '100%', sm: 'auto' } }}
                      >
                        <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                          <Typography variant="caption" color="text.secondary" display="block">
                            {t('Total Amount')}
                          </Typography>
                          <Typography variant="subtitle1" fontWeight="800" color="primary.main">
                            ${order.totalPrice?.toFixed(2)}
                          </Typography>
                        </Box>

                        <IconButton
                          size="small"
                          onClick={() => toggleExpand(order.id)}
                          sx={{
                            bgcolor: isExpanded ? 'primary.main' : 'action.hover',
                            color: isExpanded ? 'white' : 'text.primary',
                            '&:hover': {
                              bgcolor: isExpanded ? 'primary.dark' : 'action.selected'
                            }
                          }}
                        >
                          {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                      </Stack>
                    </Stack>
                  </Box>
                  <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                    <Box sx={{ bgcolor: 'grey.50', p: 2.5, borderTop: '1px solid', borderColor: 'divider' }}>
                      <Typography variant="caption" fontWeight="700" color="text.secondary" sx={{ mb: 1.5, display: 'block' }}>
                        {t('PURCHASED ITEMS')} ({order.items?.length || 0})
                      </Typography>

                      <Stack spacing={1.5} sx={{ mb: 2 }}>
                        {order.items?.map((item) => (
                          <Box
                            key={item.id}
                            sx={{
                              p: 1.5,
                              px: 2,
                              borderRadius: 2.5,
                              bgcolor: 'background.paper',
                              border: '1px solid',
                              borderColor: 'divider',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                          >
                            <Stack direction="row" spacing={2} alignItems="center">
                              <Badge badgeContent={`x${item.count}`} color="primary">
                                <Avatar
                                  variant="rounded"
                                  sx={{
                                    width: 40,
                                    height: 40,
                                    bgcolor: 'primary.50',
                                    color: 'primary.main',
                                    fontWeight: 700,
                                    borderRadius: 2
                                  }}
                                >
                                  {item.productName ? item.productName.charAt(0).toUpperCase() : 'P'}
                                </Avatar>
                              </Badge>
                              <Typography variant="body2" fontWeight="600">
                                {item.productName}
                              </Typography>
                            </Stack>

                            <Typography variant="subtitle2" fontWeight="700">
                              ${(item.price * item.count).toFixed(2)}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>

                      <Stack direction="row" spacing={1.5} justifyContent="flex-end">
                        <Button
                          size="small"
                          variant="outlined"
                          startIcon={<AutoRenewIcon />}
                          sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600 }}
                        >
                          {t('Buy Again')}
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600 }}
                        >
                          {t('Track Package')}
                        </Button>
                      </Stack>
                    </Box>
                  </Collapse>
                </Paper>
              );
            })
          )}
        </Stack>
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack spacing={3}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 3.5, border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h6" fontWeight="800" gutterBottom>
              {t('Order Overview')}
            </Typography>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={6}>
                <Card elevation={0} sx={{ bgcolor: 'primary.50', p: 1.5, borderRadius: 2.5 }}>
                  <Typography variant="caption" color="text.secondary" display="block">
                    {t('Total Spent')}
                  </Typography>
                  <Typography variant="h6" fontWeight="800" color="primary.main">
                    ${totalSpent.toFixed(2)}
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card elevation={0} sx={{ bgcolor: 'grey.100', p: 1.5, borderRadius: 2.5 }}>
                  <Typography variant="caption" color="text.secondary" display="block">
                    {t('Total Orders')}
                  </Typography>
                  <Typography variant="h6" fontWeight="800">
                    {orders.length}
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card elevation={0} sx={{ bgcolor: 'success.50', p: 1.5, borderRadius: 2.5 }}>
                  <Typography variant="caption" color="text.secondary" display="block">
                    {t('Delivered')}
                  </Typography>
                  <Typography variant="h6" fontWeight="800" color="success.main">
                    {deliveredCount}
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card elevation={0} sx={{ bgcolor: 'info.50', p: 1.5, borderRadius: 2.5 }}>
                  <Typography variant="caption" color="text.secondary" display="block">
                    {t('In Transit')}
                  </Typography>
                  <Typography variant="h6" fontWeight="800" color="info.main">
                    {inTransitCount}
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3.5,
              background: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
              color: 'white'
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                <SupportAgentIcon />
              </Avatar>
              <Box>
                <Typography variant="subtitle1" fontWeight="800">
                  {t('Need Help With An Order?')}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  {t('Our support team is available 24/7')}
                </Typography>
              </Box>
            </Stack>

            <Button
              fullWidth
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                borderRadius: 2.5,
                fontWeight: 700,
                textTransform: 'none',
                '&:hover': { bgcolor: 'grey.100' }
              }}
            >
              {t('Contact Support')}
            </Button>
          </Paper>
        </Stack>
      </Grid>
    </Grid>
  );
}