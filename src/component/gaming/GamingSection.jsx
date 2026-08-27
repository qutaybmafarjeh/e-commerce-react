import React from 'react';
import {
    Box, Container, Grid, Card, CardContent, CardMedia, CardActionArea,
    Typography, Chip, Rating, Button
} from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
        image: './src/assets/images/gaming/console.jpg' ,
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
                        <SportsEsportsIcon color="primary" sx={{ fontSize: 36 }} />
                        <Typography variant="h4" component="h2" fontWeight="700">
                            {t('Gaming Gear & Consoles')}
                        </Typography>
                    </Box>

                    <Button
                        component={Link}
                        to="/products?category=gaming"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ fontWeight: 600 }}
                    >
                        {t('Explore Gaming Zone')}
                    </Button>
                </Box>

                <Grid container spacing={3}>
                    {gamingProducts.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={2} key={product.id}>
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
                                
                                {product.badge && (
                                    <Chip
                                        label={product.badge}
                                        color={product.badge === 'Sale' || product.badge === 'Hot Deal' ? 'error' : 'primary'}
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
                                    to={`/products/${product.id}`}
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
                                            height: 180,
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

                                  
                                    <CardContent sx={{ flexGrow: 1, p: 2 }}>
                                        <Typography
                                            variant="subtitle1"
                                            component="h3"
                                            fontWeight="600"
                                            sx={{
                                                fontSize: '0.95rem',
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
                                                value={product.rating}
                                                precision={0.1}
                                                readOnly
                                                size="small"
                                            />
                                            <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
                                                ({product.reviewsCount})
                                            </Typography>
                                        </Box>

                                        
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Typography variant="h6" fontWeight="700" color="primary.main" sx={{ fontSize: '1.1rem' }}>
                                                ${product.price}
                                            </Typography>
                                            {product.oldPrice && (
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ textDecoration: 'line-through' }}
                                                >
                                                    ${product.oldPrice}
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

export default GamingSection;