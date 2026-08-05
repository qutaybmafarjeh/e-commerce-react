import React from 'react'
import useProducts from '../../hooks/useProducts';
import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import { data, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';




const Products = () => {


    const { data, products, isLoading, isError, error } = useProducts();
    const { t } = useTranslation();
    if (isLoading) {
        return <CircularProgress />;
    }


    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    


    return (
        <Box className="products" component="section">
            <Typography variant="h1" component="h2" sx={{ textAlign: 'center', marginTop: 2 }}>
                {t('Products')}
            </Typography>

            <Grid container spacing={{ xs: 2, md: 2 }} sx={{
                justifyContent: 'center', textAlign: 'center', alignItems: 'center',
                marginTop: 2, marginLeft: 2, marginRight: 2
            }}>
                {data.response.data.map((product) => (
                    <Grid size={{ sm: 6, md: 4 }} key={product.id}>
                        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <CardMedia
                                    component="img"
                                    image={product.image}
                                    alt={product.name}
                                    sx={{ width: 200 }}
                                ></CardMedia>
                                <CardContent>
                                    <Typography variant="h5" component="h3">
                                        {product.name}
                                        <Typography variant="body2" color="text.secondary">
                                            price: {product.price}
                                        </Typography>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}






            </Grid>


        </Box>




    )
}

export default Products
