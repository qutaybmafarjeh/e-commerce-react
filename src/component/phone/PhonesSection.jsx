import React from 'react';
import {
    Box, Container, Grid, Card, CardContent, CardMedia, CardActionArea,
    Typography, Chip, Rating, Stack
} from '@mui/material';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
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
                <Box sx={{ mb: 5, textAlign: 'center' }}>
                    <Stack direction="row" alignitems="center" justifycontent="center" spacing={1.5} sx={{ mb: 1 }}>
                        <Box
                            sx={{
                                p: 1,
                                borderRadius: 2,
                                bgcolor: 'primary.50',
                                color: 'primary.main',
                                display: 'flex',
                            }}
                        >
                            <SmartphoneIcon sx={{ fontSize: 32 }} />
                        </Box>
                        <Typography variant="h4" component="h2" fontWeight="800" letterSpacing="-0.5px">
                            {t('Smartphones')}
                        </Typography>
                    </Stack>
                    <Typography variant="body1" color="text.secondary" maxwidth="600px" mx="auto">
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {phoneProducts.map((phone) => (
                        <Grid item="true" xs={12} sm={6} md={4} lg={2.4} key={phone.id}>
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
                                {phone.badge && (
                                    <Chip
                                        label={phone.badge}
                                        color={phone.badge === 'Sale' ? 'error' : 'primary'}
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
                                    to={`/products/${phone.id}`}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignitems: 'stretch',
                                        justifycontent: 'space-between',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: 220,
                                            p: 3,
                                            display: 'flex',
                                            alignitems: 'center',
                                            justifycontent: 'center',
                                            bgcolor: 'grey.50',
                                            borderBottom: '1px solid',
                                            borderColor: 'grey.100',
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={phone.image}
                                            alt={phone.name}
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
                                            {phone.name}
                                        </Typography>

                                        <Stack direction="row" alignitems="center" spacing={0.5} sx={{ mb: 2 }}>
                                            <Rating
                                                value={phone.rating}
                                                precision={0.1}
                                                readOnly
                                                size="small"
                                                sx={{ fontSize: '0.9rem' }}
                                            />
                                            <Typography variant="caption" color="text.secondary" fontWeight="600">
                                                {phone.rating} ({phone.reviewsCount})
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" alignitems="baseline" spacing={1}>
                                            <Typography variant="h6" fontWeight="800" color="primary.main">
                                                ${phone.price}
                                            </Typography>
                                            {phone.oldPrice && (
                                                <Typography
                                                    variant="body2"
                                                    color="text.disabled"
                                                    sx={{ textDecoration: 'line-through', fontWeight: 500 }}
                                                >
                                                    ${phone.oldPrice}
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

export default PhonesSection;