import React from 'react';
import {
    Box, Container, Grid, Card, CardContent, CardMedia, CardActionArea,
    Typography, Chip, Rating, Button
} from '@mui/material';
import TvIcon from '@mui/icons-material/Tv';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// 4 Sample TV Products
const tvProducts = [
    {
        id: 'tv-1',
        name: 'LG C3 65" 4K Smart OLED TV',
        price: 1599,
        oldPrice: 1899,
        rating: 4.9,
        reviewsCount: 210,
        specs: '65" OLED 120Hz',
        image: './src/assets/images/tv/lg.jpg',
        badge: 'Top Rated',
    },
    {
        id: 'tv-2',
        name: 'Samsung 75" Neo QLED 4K TV',
        price: 2199,
        oldPrice: 2499,
        rating: 4.8,
        reviewsCount: 145,
        specs: '75" Mini-LED',
        image: './src/assets/images/tv/samsung.jpg',
        badge: 'Sale',
    },
    {
        id: 'tv-3',
        name: 'Sony BRAVIA XR 55" OLED',
        price: 1399,
        oldPrice: null,
        rating: 4.7,
        reviewsCount: 98,
        specs: '55" OLED Google TV',
        image: './src/assets/images/tv/sony.jpg',
        badge: 'New',
    },
    {
        id: 'tv-4',
        name: 'TCL 65" QLED 4K Smart TV',
        price: 699,
        oldPrice: 799,
        rating: 4.6,
        reviewsCount: 320,
        specs: '65" QLED HDR10+',
        image: './src/assets/images/tv/tcl.jpg',
        badge: 'Best Value',
    },
];

const TvSection = () => {
    const { t } = useTranslation();

    return (
        <Box component="section" sx={{ py: 8, bgcolor: 'grey.50' }}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: 'flex',
                        justify: 'space-between',
                        alignItems: 'center',
                        mb: 4,
                        flexWrap: 'wrap',
                        gap: 2
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <TvIcon color="primary" sx={{ fontSize: 36 }} />
                        <Typography variant="h4" component="h2" fontWeight="700">
                            {t('Smart TVs & Displays')}
                        </Typography>
                    </Box>

                    <Button
                        component={Link}
                        to="/products?category=tv"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ fontWeight: 600 }}
                    >
                        {t('View All TVs')}
                    </Button>
                </Box>

                <Grid container spacing={3}>
                    {tvProducts.map((tv) => (
                        <Grid item xs={12} sm={6} md={3} key={tv.id}>
                            <Card
                                elevation={2}
                                sx={{
                                    height: '100%',
                                    borderRadius: 3,
                                    position: 'relative',
                                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: 6,
                                    },
                                }}
                            >
                               
                                {tv.badge && (
                                    <Chip
                                        label={tv.badge}
                                        color={tv.badge === 'Sale' ? 'error' : 'primary'}
                                        size="small"
                                        sx={{
                                            position: 'absolute',
                                            top: 12,
                                            left: 12,
                                            zIndex: 2,
                                            fontWeight: 700,
                                            fontSize: '0.75rem',
                                        }}
                                    />
                                )}

                                <CardActionArea
                                    component={Link}
                                    to={`/products/${tv.id}`}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'stretch',
                                        justify: 'space-between',
                                    }}
                                >
                                  
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: 200,
                                            p: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justify: 'center',
                                            bgcolor: 'white',
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={tv.image}
                                            alt={tv.name}
                                            sx={{
                                                maxHeight: '100%',
                                                maxWidth: '100%',
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </Box>

                                  
                                    <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                                        <Typography
                                            variant="subtitle1"
                                            component="h3"
                                            fontWeight="600"
                                            sx={{
                                                fontSize: '1rem',
                                                mb: 0.5,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            {tv.name}
                                        </Typography>

                                       
                                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                                            {tv.specs}
                                        </Typography>

                                       
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                            <Rating
                                                value={tv.rating}
                                                precision={0.1}
                                                readOnly
                                                size="small"
                                            />
                                            <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
                                                ({tv.reviewsCount})
                                            </Typography>
                                        </Box>

                                       
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Typography variant="h6" fontWeight="700" color="primary.main">
                                                ${tv.price}
                                            </Typography>
                                            {tv.oldPrice && (
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ textDecoration: 'line-through' }}
                                                >
                                                    ${tv.oldPrice}
                                                </Typography>
                                            )}
                                        </Box>
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

export default TvSection;