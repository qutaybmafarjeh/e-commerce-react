import React from 'react';

import useProducts from '../../hooks/useProducts';

import {

    Box, Card, CardContent, CardMedia, CardActionArea, CircularProgress, Container, Grid, Typography,

    Paper, Chip

} from '@mui/material';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';



const Products = () => {

    const { t } = useTranslation();

    const { data, products, isLoading, isError, error } = useProducts();



    if (isLoading) {

        return (

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>

                <CircularProgress size={48} />

            </Box>

        );

    }



    if (isError) {

        return (

            <Container maxWidth="md" sx={{ mt: 8 }}>

                <Paper elevation={0} sx={{ p: 4, textAlign: 'center', bgcolor: 'grey.50', borderRadius: 3 }}>

                    <ErrorOutlineIcon color="error" sx={{ fontSize: 48, mb: 1 }} />

                    <Typography variant="h6" color="text.secondary">

                        {error?.message || 'Error loading products.'}

                    </Typography>

                </Paper>

            </Container>

        );

    }



    return (

        <Box className="products" component="section" sx={{ py: 6 }}>

            <Container maxWidth="lg">



                <Typography

                    variant="h4"

                    component="h1"

                    fontWeight="700"

                    sx={{ textalign: 'center', mb: 4 }}

                >

                    {t('Products')}

                </Typography>



                <Grid container spacing={3}>

                    {data?.response?.data?.map((product) => (

                        <Grid item xs={12} sm={6} md={4} key={product.id}>

                            <Card

                                elevation={2}

                                sx={{

                                    height: '100%',

                                    borderRadius: 3,

                                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',

                                    '&:hover': {

                                        transform: 'translateY(-4px)',

                                        boxShadow: 6,

                                    },

                                }}

                            >

                                <CardActionArea

                                    component={Link}

                                    to={`/products/${product.id}`}

                                    sx={{

                                        height: '100%',

                                        display: 'flex',

                                        flexDirection: 'column',

                                        alignItems: 'stretch',

                                        justifyContent: 'space-between',

                                    }}

                                >



                                    <Box

                                        sx={{

                                            width: '100%',

                                            height: 220,

                                            p: 2,

                                            display: 'flex',

                                            alignItems: 'center',

                                            justify: 'center',

                                            bgcolor: 'grey.50',

                                        }}

                                    >

                                        <CardMedia

                                            component="img"

                                            image={product.image}

                                            alt={product.name}

                                            sx={{

                                                maxHeight: '100%',

                                                maxWidth: '100%',

                                                objectFit: 'contain',

                                            }}

                                        />

                                    </Box>



                                    <CardContent sx={{ flexGrow: 1, p: 2.5 }}>

                                        <Typography

                                            variant="h6"

                                            component="h3"

                                            fontWeight="600"

                                            sx={{

                                                fontSize: '1.1rem',

                                                mb: 1.5,

                                                overflow: 'hidden',

                                                textOverflow: 'ellipsis',

                                                whiteSpace: 'nowrap',

                                            }}

                                        >

                                            {product.name}

                                        </Typography>



                                        <Chip

                                            label={`$${product.price}`}

                                            color="primary"

                                            size="medium"

                                            sx={{

                                                fontWeight: 700,

                                                fontSize: '0.95rem',

                                                borderRadius: 1.5,

                                            }}

                                        />

                                    </CardContent>

                                </CardActionArea>

                            </Card>

                        </Grid>

                    ))}

                </Grid>



            </Container>

        </Box>

    );

};



export default Products;