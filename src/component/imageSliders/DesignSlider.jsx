import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Container, Typography } from '@mui/material';


const DESIGN_SLIDES = [
  { id: 1, src: './src/images/image/image1.jpg', alt: '' },
  { id: 2, src: './src/images/image/iphone.jpg', alt: '' },
  { id: 3, src: './src/images/image/laptop.jpg', alt: '' },
  { id: 3, src: './src/images/image/samsung.jpg', alt: '' },
];

export default function DesignSlider() {
  return (
    <Typography position="relative" sx={{ margin: '10 auto',marginTop:'80px'}}>
      <Container maxWidth>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        style={{ borderRadius: '10px', overflow: 'hidden' }}
      >
        {DESIGN_SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.src}
              alt={slide.alt}
              style={{
                width: '1400px',
                height: '500px',
                objectFit: 'containe',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          </SwiperSlide>
        ))}
        
      </Swiper>
      </Container>
    </Typography>
  );
}