import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Container, Box, Typography, Button, Paper } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const DESIGN_SLIDES = [
  { id: 1, src: './src/assets/images/image/image1.jpg', alt: 'laptop' },
  { id: 2, src: './src/assets/images/image/pc.jpg', alt: 'pc' },
  { id: 3, src: './src/assets/images/image/headset.jpg', alt: 'headsetOffer' },
  { id: 4, src: './src/assets/images/image/tv.jpg', alt: 'tv' },
];

export default function DesignSlider() {
  return (
    <Container maxWidth="xl" sx={{ mt: 3, mb: 3 }}>
      <Paper
        elevation={6}
        sx={{
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative',
          background: 'linear-gradient(145deg, #121212 0%, #1a1a2e 100%)',
          boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.4)',
        }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          style={{ width: '100%', height: '500px' }}
        >
          {DESIGN_SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src={slide.src}
                  alt={slide.alt || 'Banner slide'}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    filter: 'brightness(0.9)',
                    transition: 'transform 0.6s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <Box
            className="swiper-button-prev-custom"
            sx={{
              position: 'absolute',
              top: '50%',
              left: 20,
              zIndex: 10,
              transform: 'translateY(-50%)',
              color: '#fff',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(8px)',
              width: 48,
              height: 48,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                transform: 'translateY(-50%) scale(1.1)',
              },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </Box>

          <Box
            className="swiper-button-next-custom"
            sx={{
              position: 'absolute',
              top: '50%',
              right: 20,
              zIndex: 10,
              transform: 'translateY(-50%)',
              color: '#fff',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(8px)',
              width: 48,
              height: 48,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                transform: 'translateY(-50%) scale(1.1)',
              },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </Box>
        </Swiper>

        {/* Global Pagination Styles */}
        <Box
          sx={{
            '& .swiper-pagination': {
              bottom: '16px !important',
            },
            '& .swiper-pagination-bullet': {
              width: 10,
              height: 10,
              backgroundColor: '#fff',
              opacity: 0.5,
              transition: 'all 0.3s ease',
            },
            '& .swiper-pagination-bullet-active': {
              opacity: 1,
              width: 28,
              borderRadius: '6px',
              backgroundColor: '#3f51b5',
            },
          }}
        />
      </Paper>
    </Container>
  );
}