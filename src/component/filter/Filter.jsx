import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import {
    Box, Card, CardContent, CardMedia, CardActionArea, CircularProgress, Container, Grid, Typography,
    Paper, Chip, Rating, FormLabel, RadioGroup, FormControlLabel, Radio, Slider, Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Products = () => {
    const { t } = useTranslation();
    const { data, isLoading, isError, error } = useProducts();

    const [selectedCategory, setSelectedCategory] = useState('electronics');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedRating, setSelectedRating] = useState(0);

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

    const rawProducts = data?.response?.data || [];

    const filteredProducts = rawProducts.filter((product) => {
        const productCategory = (product?.category?.name || product?.category || '').toLowerCase();
        const targetCategory = selectedCategory.toLowerCase();

        const matchesCategory = selectedCategory === 'all' || productCategory === targetCategory;
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        const matchesRating = selectedRating === 0 || (product.rating && product.rating >= selectedRating);
        
        return matchesCategory && matchesPrice && matchesRating;
    });

    return (
        <Box className="products" component="section" sx={{ py: 6 }}>
            <Container maxWidth="xl">
                <Typography
                    variant="h4"
                    component="h1"
                    fontWeight="700"
                    sx={{ mb: 4 }}
                >
                    {t('Products')}
                </Typography>

                <Grid container spacing={4}>
                    <Grid item="true" xs={12} md={3}>
                        <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
                            <Typography variant="h6" fontWeight="700" sx={{ mb: 2 }}>
                                {t('Filters')}
                            </Typography>
                            
                            <Box sx={{ mb: 3 }}>
                                <FormLabel component="legend" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                                    {t('Category')}
                                </FormLabel>
                                <RadioGroup
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    <FormControlLabel value="all" control={<Radio size="small" />} label="All" />
                                    <FormControlLabel value="electronics" control={<Radio size="small" />} label="Electronics" />
                                    <FormControlLabel value="clothing" control={<Radio size="small" />} label="Phones" />
                                    <FormControlLabel value="accessories" control={<Radio size="small" />} label="TV" />
                                </RadioGroup>
                            </Box>

                            <Divider sx={{ my: 2 }} />

                            <Box sx={{ mb: 3 }}>
                                <Typography fontWeight="600" sx={{ mb: 1 }}>
                                    {t('Price Range')}
                                </Typography>
                                <Slider
                                    value={priceRange}
                                    onChange={(e, newValue) => setPriceRange(newValue)}
                                    valueLabelDisplay="auto"
                                    min={0}
                                    max={1000}
                                    valueLabelFormat={(val) => `$${val}`}
                                />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="caption" color="text.secondary">${priceRange[0]}</Typography>
                                    <Typography variant="caption" color="text.secondary">${priceRange[1]}</Typography>
                                </Box>
                            </Box>

                            <Divider sx={{ my: 2 }} />

                            <Box>
                                <Typography fontWeight="600" sx={{ mb: 1 }}>
                                    {t('Minimum Rating')}
                                </Typography>
                                <Rating
                                    name="rating-filter"
                                    value={selectedRating}
                                    onChange={(e, newValue) => setSelectedRating(newValue || 0)}
                                    precision={1}
                                />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item="true" xs={12} md={9}>
                        <Grid container spacing={3}>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <Grid item="true" xs={12} sm={6} md={4} key={product.id}>
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
                                                        justifyContent: 'center',
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
                                                            mb: 1,
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            whiteSpace: 'nowrap',
                                                        }}
                                                    >
                                                        {product.name}
                                                    </Typography>

                                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                                        <Rating
                                                            value={product.rating || 0}
                                                            precision={0.5}
                                                            readOnly
                                                            size="small"
                                                        />
                                                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                                                            ({product.rating || 0})
                                                        </Typography>
                                                    </Box>

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
                                ))
                            ) : (
                                <Grid item="true" xs={12}>
                                    <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'grey.50', borderRadius: 3 }}>
                                        <Typography variant="h6" color="text.secondary">
                                            {t('No products found matching your filters.')}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;