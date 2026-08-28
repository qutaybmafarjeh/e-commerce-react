import React, { useState } from 'react';
import useCart from '../../hooks/useCart';
import {
  Box,
  CircularProgress,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Container,
  Grid,
  Paper,
  Divider,
  Stack,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import useCheckout from '../../hooks/useCheckout';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Checkout() {
  const { t } = useTranslation();

  const { data, isLoading, isError, error } = useCart();
  const { mutate: checkout, isPending: isCheckingOut } = useCheckout();

  const [paymentMethod, setPaymentMethod] = useState('');

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress size={48} thickness={4} />
      </Box>
    );
  }

  if (isError) {
    return (
      <Container maxWidth="md" sx={{ mt: 10, textAlign: 'center' }}>
        <Typography color="error" variant="h6">
          {typeof error === 'string' ? error : error?.message || 'Error loading checkout data'}
        </Typography>
      </Container>
    );
  }

  const grandTotal =
    data?.items?.reduce(
      (acc, item) => acc + (item.totalPrice || item.price * item.count),
      0
    ) || 0;

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 10 }}>
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 4 }}>
        <PaymentIcon color="primary" sx={{ fontSize: 36 }} />
        <Typography variant="h4" fontWeight="700" color="text.primary">
          {t('Checkout')}
        </Typography>
      </Stack>

      <Grid container spacing={4}>
        <Grid item xs={12} md={7} lg={8}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'divider'
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
              <ShoppingBagOutlinedIcon color="action" />
              <Typography variant="h6" fontWeight="700">
                {t('Order Items')}
              </Typography>
            </Stack>

            <TableContainer sx={{ overflowX: 'auto' }}>
              <Table>
                <TableHead sx={{ bgcolor: 'action.hover' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700, py: 1.5 }}>
                      {t('Product Name')}
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, py: 1.5 }}>
                      {t('Product Id')}
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, py: 1.5, textAlign: 'center' }}>
                      {t('Quantity')}
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, py: 1.5 }}>
                      {t('Price')}
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, py: 1.5, textAlign: 'right' }}>
                      {t('Total')}
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {data?.items?.map((item) => (
                    <TableRow key={item.id} hover>
                      <TableCell sx={{ py: 2 }}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <Avatar
                            variant="rounded"
                            sx={{
                              width: 36,
                              height: 36,
                              bgcolor: 'primary.light',
                              color: 'primary.contrastText',
                              fontSize: '0.875rem',
                              fontWeight: 700
                            }}
                          >
                            {item.productName ? item.productName.charAt(0).toUpperCase() : 'P'}
                          </Avatar>
                          <Typography variant="subtitle2" fontWeight="600">
                            {item.productName}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ py: 2 }}>
                        <Typography variant="caption" color="text.secondary">
                          {item.productId}
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ py: 2 }}>
                        <Typography variant="body2" fontWeight="600">
                          {item.count}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ py: 2 }}>
                        <Typography variant="body2">${item.price}</Typography>
                      </TableCell>
                      <TableCell align="right" sx={{ py: 2 }}>
                        <Typography variant="subtitle2" fontWeight="700" color="primary.main">
                          ${item.totalPrice}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'divider',
              p: 1,
              sticky: true,
              top: 24
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="700" gutterBottom>
                {t('Payment Details')}
              </Typography>

              {/* Price Breakdown */}
              <Stack spacing={2} sx={{ my: 3 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="text.secondary">{t('Subtotal')}</Typography>
                  <Typography fontWeight="600">${grandTotal.toFixed(2)}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="text.secondary">{t('Shipping')}</Typography>
                  <Typography color="success.main" fontWeight="600">
                    {t('Free')}
                  </Typography>
                </Stack>
                <Divider />
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="subtitle1" fontWeight="700">
                    {t('Total Amount')}
                  </Typography>
                  <Typography variant="h5" fontWeight="800" color="primary.main">
                    ${grandTotal.toFixed(2)}
                  </Typography>
                </Stack>
              </Stack>

              <Box sx={{ mt: 3, mb: 3 }}>
                <FormControl fullWidth size="medium">
                  <InputLabel id="payment-method-select-label">
                    {t('Payment Method')}
                  </InputLabel>
                  <Select
                    labelId="payment-method-select-label"
                    id="payment-method-select"
                    value={paymentMethod}
                    label={t('Payment Method')}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    sx={{ borderRadius: 2.5 }}
                  >
                    <MenuItem value={'Visa'}>
                      <Stack direction="row" alignItems="center" spacing={1.5}>
                        <CreditCardIcon color="action" fontSize="small" />
                        <Typography>{t('Visa')}</Typography>
                      </Stack>
                    </MenuItem>
                    <MenuItem value={'Cash'}>
                      <Stack direction="row" alignItems="center" spacing={1.5}>
                        <LocalAtmIcon color="action" fontSize="small" />
                        <Typography>{t('Cash')}</Typography>
                      </Stack>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button
                variant="contained"
                color="success"
                fullWidth
                size="large"
                startIcon={<LockOutlinedIcon />}
                onClick={() => checkout({ paymentMethod })}
                disabled={isCheckingOut || !paymentMethod}
                sx={{
                  borderRadius: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  boxShadow: 2
                }}
              >
                {isCheckingOut ? t('Processing...') : t('Pay Now')}
              </Button>

              <Typography
                variant="caption"
                color="text.secondary"
                align="center"
                display="block"
                sx={{ mt: 2 }}
              >
                🔒 {t('Encrypted & Secure Checkout')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}