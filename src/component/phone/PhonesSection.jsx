import React from 'react';
import {
    Box, Container, Grid, Card, CardContent, CardMedia, CardActionArea,
    Typography, Chip, Rating, Button
} from '@mui/material';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const phoneProducts = [
    {
        id: 'phone-1',
        name: 'iPhone 15 Pro Max',
        price: 1199,
        oldPrice: 1299,
        rating: 4.9,
        reviewsCount: 128,
        image: './src/assets/images/phone/iphone.jpg',
        badge: 'Top Rated',
    },
    {
        id: 'phone-2',
        name: 'Samsung Galaxy S24 Ultra',
        price: 1299,
        oldPrice: null,
        rating: 4.8,
        reviewsCount: 95,
        image: './src/assets/images/phone/samsung.jpg',
        badge: 'New',
    },
    {
        id: 'phone-3',
        name: 'Google Pixel 8 Pro',
        price: 899,
        oldPrice: 999,
        rating: 4.7,
        reviewsCount: 64,
        image: './src/assets/images/phone/google.jpg',
        badge: 'Sale',
    },
    {
        id: 'phone-4',
        name: 'OnePlus 12',
        price: 799,
        oldPrice: null,
        rating: 4.6,
        reviewsCount: 42,
        image: './src/assets/images/phone/oneplus.jpg',
        badge: null,
    },
    {
        id: 'phone-5',
        name: 'Xiaomi 14 Ultra',
        price: 949,
        oldPrice: 1049,
        rating: 4.5,
        reviewsCount: 31,
        image: './src/assets/images/phone/xiaomi.jpg',
        badge: 'Best Value',
    },
];

const PhonesSection = () => {
    const { t } = useTranslation();

    return (
        <Box component="section" sx={{ py: 8, bgcolor: 'grey.50' }}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: 'flex',
                        justify: 'space-between',
                        alignitems: 'center',
                        mb: 4,
                        flexWrap: 'wrap',
                        gap: 2
                    }}
                >
                    <Box sx={{ display: 'flex', alignitems: 'center', gap: 1.5 }}>
                        <SmartphoneIcon color="primary" sx={{ fontSize: 36 }} />
                        <Typography variant="h4" component="h2" fontWeight="700">
                            {t('Smartphones')}
                        </Typography>
                    </Box>

                    <Button
                        component={Link}
                        to="/products?category=electronics"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ fontWeight: 600 }}
                    >
                        {t('View All Phones')}
                    </Button>
                </Box>

                <Grid container spacing={3}>
                    {phoneProducts.map((phone) => (
                        <Grid item xs={12} sm={6} md={4} lg={2.4} key={phone.id}>
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
                               
                                {phone.badge && (
                                    <Chip
                                        label={phone.badge}
                                        color={phone.badge === 'Sale' ? 'error' : 'primary'}
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
                                    to={`/products/${phone.id}`}
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
                                            height: 200,
                                            p: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: 'white',
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={phone.image}
                                            alt={phone.name}
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
                                                fontSize: '1rem',
                                                mb: 1,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            {phone.name}
                                        </Typography>

                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                            <Rating
                                                value={phone.rating}
                                                precision={0.1}
                                                readOnly
                                                size="small"
                                            />
                                            <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
                                                ({phone.reviewsCount})
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Typography variant="h6" fontWeight="700" color="primary.main">
                                                ${phone.price}
                                            </Typography>
                                            {phone.oldPrice && (
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ textDecoration: 'line-through' }}
                                                >
                                                    ${phone.oldPrice}
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

export default PhonesSection;