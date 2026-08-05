import React, { useState } from 'react'
import useCart from '../../hooks/useCart';
import {
    Box, CircularProgress, TableBody, Table,
    IconButton, TableCell, TableContainer, TableHead, TableRow,
    Typography,
    Menu,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import useCheckout from '../../hooks/useCheckout';


export default function Checkout() {
    const { t } = useTranslation();

    const { data, isLoading, isError, error } = useCart();
    const{mutate: checkout, isPending: isCheckingOut} = useCheckout();

    const [paymentMethod, setPaymentMethod] = useState('');

    if (isLoading) {
        return <CircularProgress />;
    }
    if (isError) {
        return <Box color="red">{error}</Box>;
    }


    return (
        <Box coponent="section">
            <Typography varient='h1'  >
                {t('Checkout')}
            </Typography>

            <TableContainer>
                <Table>

                    <TableHead>


                        <TableCell>{t('Product Name')}</TableCell>
                        <TableCell>{t('Product Id')}</TableCell>
                        <TableCell>{t('Quantity')}</TableCell>
                        <TableCell>{t('Price')}</TableCell>
                        <TableCell>{t('Total')}</TableCell>


                    </TableHead>

                    <TableBody>



                        {data.items.map((item) =>
                        (
                            <TableRow key={item.id}>
                                <TableCell>{item.productName}</TableCell>
                                <TableCell>{item.productId}</TableCell>
                                <TableCell>{item.count}</TableCell>
                                <TableCell>{item.price}$</TableCell>
                                <TableCell>{item.totalPrice}</TableCell>


                            </TableRow>
                        )
                        )}




                    </TableBody>

                </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mt: 5, mr: 10 }}>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
                    <Select sx={{ minWidth: 200 }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={paymentMethod}
                        label="Payment Method"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >  
                        <MenuItem value={'Visa'}>{t('Visa')}</MenuItem>
                        <MenuItem value={'Cash'}>{t('Cash')}</MenuItem>

                    </Select>
                </FormControl>
                
            </Box>
            <Button variant="contained" sx={{ mt: 4,pr:4 ,pl:4  }} color="success" onClick={() => checkout({ paymentMethod })} disabled={isCheckingOut}>
                {t('Pay Now')}
            </Button>
        </Box>

    )
}
