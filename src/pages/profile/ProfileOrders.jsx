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
  Badge
} from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import { useTranslation } from 'react-i18next';

export default function ProfileOrders() {
  const { t } = useTranslation();

  const ordersData = null;
  const isLoading = false;
  const isError = false;

  const [expandedOrderId, setExpandedOrderId] = useState(null);

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
      totalPrice: 145.0,
      paymentMethod: 'Visa',
      items: [
        { id: '101', productName: 'Wireless Noise-Canceling Headphones', count: 1, price: 120.0 },
        { id: '102', productName: 'PS5', count: 1, price: 499 }
      ]
    },
    {
      id: 'ORD-98104',
      date: 'Aug 22, 2026',
      status: 'shipped',
      totalPrice: 89.99,
      paymentMethod: 'Cash',
      items: [{ id: '103', productName: 'Ergonomic Gaming Mouse', count: 1, price: 89.99 }]
    }
  ];

  if (isError || orders.length === 0) {
    return (
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
          {t('No orders placed yet')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t('Your recent purchase history will appear here.')}
        </Typography>
      </Paper>
    );
  }

  return (
    <Stack spacing={2.5}>
      {orders.map((order) => {
        const isExpanded = expandedOrderId === order.id;

        return (
          <Paper
            key={order.id}
            elevation={0}
            sx={{
              borderRadius: 3.5,
              border: '1px solid',
              borderColor: 'divider',
              overflow: 'hidden',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                borderColor: 'primary.light',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
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
                      bgcolor: 'action.hover',
                      color: 'primary.main',
                      width: 44,
                      height: 44,
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
                      {t('Total Price')}
                    </Typography>
                    <Typography variant="title" fontSize="1.1rem" fontWeight="800" color="primary.main">
                      ${order.totalPrice?.toFixed(2)}
                    </Typography>
                  </Box>

                  <Button
                    size="small"
                    variant={isExpanded ? 'contained' : 'outlined'}
                    disableElevation
                    onClick={() => toggleExpand(order.id)}
                    endIcon={isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    sx={{
                      borderRadius: 2.5,
                      textTransform: 'none',
                      fontWeight: 700,
                      px: 2
                    }}
                  >
                    {isExpanded ? t('Close') : t('Details')}
                  </Button>
                </Stack>
              </Stack>
            </Box>

            {isExpanded && (
              <Box sx={{ bgcolor: 'action.hover', p: 2.5 }}>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="caption" fontWeight="700" color="text.secondary" sx={{ mb: 1.5, display: 'block' }}>
                  {t('ORDERED ITEMS')} ({order.items?.length || 0})
                </Typography>

                <Stack spacing={1.5}>
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
              </Box>
            )}
          </Paper>
        );
      })}
    </Stack>
  );
}
