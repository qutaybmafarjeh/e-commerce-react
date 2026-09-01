import React from 'react';
import {
    Box, Container, Grid, Card, CardContent, CardMedia, CardActionArea,
    Typography, Chip, Rating, Stack
} from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const gamingProducts = [
    {
        id: 'game-1',
        name: 'PlayStation 5 Console',
        price: 499,
        oldPrice: 549,
        rating: 4.9,
        reviewsCount: 342,
        image: './src/assets/images/new-product/ps5.jpg',
        badge: 'Best Seller',
    },
    {
        id: 'game-2',
        name: 'DualSense Wireless Controller',
        price: 69,
        oldPrice: null,
        rating: 4.8,
        reviewsCount: 215,
        image: './src/assets/images/gaming/console.jpg',
        badge: 'Popular',
    },
    {
        id: 'game-3',
        name: 'Xbox Series X Console',
        price: 479,
        oldPrice: 499,
        rating: 4.7,
        reviewsCount: 189,
        image: './src/assets/images/gaming/xbox.jpg',
        badge: 'Sale',
    },
    {
        id: 'game-4',
        name: 'Logitech G Pro X Headset',
        price: 129,
        oldPrice: 159,
        rating: 4.6,
        reviewsCount: 98,
        image: './src/assets/images/gaming/headset.jpg',
        badge: 'Hot Deal',
    },
];

const GamingSection = () => {
    const { t } = useTranslation();

    return (
        <Box component="section" sx={{ py: 8, bgcolor: 'background.paper' }}>
            <Container maxWidth="xl">
                <Box sx={{ mb: 5, textAlign: 'center' }}>
                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5} sx={{ mb: 1 }}>
                        <Box
                            sx={{
                                p: 1,
                                borderRadius: 2,
                                bgcolor: 'primary.50',
                                color: 'primary.main',
                                display: 'flex',
                            }}
                        >
                            <SportsEsportsIcon sx={{ fontSize: 32 }} />
                        </Box>
                        <Typography variant="h4" component="h2" fontWeight="800" letterSpacing="-0.5px">
                            {t('Gaming Gear & Consoles')}
                        </Typography>
                    </Stack>
                </Box>

                {/* Product Grid */}
                <Grid container spacing={3} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                    {gamingProducts.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                            <Card
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    borderRadius: 4,
                                    border: '1px solid',
                                    borderColor: 'grey.200',
                                    bgcolor: 'background.paper',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        boxShadow: '0 12px 24px -10px rgba(0, 0, 0, 0.1)',
                                        borderColor: 'transparent',
                                        '& .product-image': {
                                            transform: 'scale(1.06)',
                                        },
                                    },
                                }}
                            >
                                
                                {product.badge && (
                                    <Chip
                                        label={product.badge}
                                        color={product.badge === 'Sale' || product.badge === 'Hot Deal' ? 'error' : 'primary'}
                                        size="small"
                                        sx={{
                                            position: 'absolute',
                                            top: 14,
                                            left: 14,
                                            zIndex: 2,
                                            fontWeight: 700,
                                            fontSize: '0.7rem',
                                            borderRadius: '6px',
                                            textTransform: 'uppercase',
                                            px: 0.5,
                                        }}
                                    />
                                )}

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
                                            p: 3,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: 'grey.50',
                                            borderBottom: '1px solid',
                                            borderColor: 'grey.100',
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={product.image}
                                            alt={product.name}
                                            className="product-image"
                                            sx={{
                                                maxHeight: '100%',
                                                maxWidth: '100%',
                                                objectFit: 'contain',
                                                transition: 'transform 0.3s ease-in-out',
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                                        <Typography
                                            variant="subtitle1"
                                            component="h3"
                                            fontWeight="700"
                                            sx={{
                                                fontSize: '0.95rem',
                                                lineHeight: 1.3,
                                                mb: 1,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                minHeight: '2.6em',
                                            }}
                                        >
                                            {product.name}
                                        </Typography>

                                        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 2 }}>
                                            <Rating
                                                value={product.rating}
                                                precision={0.1}
                                                readOnly
                                                size="small"
                                                sx={{ fontSize: '0.9rem' }}
                                            />
                                            <Typography variant="caption" color="text.secondary" fontWeight="600">
                                                {product.rating} ({product.reviewsCount})
                                            </Typography>
                                        </Stack>

                                        <Stack direction="row" alignItems="baseline" spacing={1}>
                                            <Typography variant="h6" fontWeight="800" color="primary.main">
                                                ${product.price}
                                            </Typography>
                                            {product.oldPrice && (
                                                <Typography
                                                    variant="body2"
                                                    color="text.disabled"
                                                    sx={{ textDecoration: 'line-through', fontWeight: 500 }}
                                                >
                                                    ${product.oldPrice}
                                                </Typography>
                                            )}
                                        </Stack>
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

export default GamingSection;