import { Box, Container, Link, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'


export default function Footer() {
  return (
    <Box sx={{ mt: '50px', bottom: '0' }}>

      <Container maxWidth>
        <Box sx={{ bgcolor: '#212121', display: 'flex', justifyContent: 'space-between', 
          alignItems: 'center',flexWrap:'wrap' }} >
          <Box>
            <Typography>
              <img src="./src/assets/images/image/KShop.png" width={'100px'} />
            </Typography>

          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between',flexWrap:'wrap',alignItems:'center' ,gap: 16, mb: 6, m: 4 }}>
            <nav>
              <Typography sx={{ color: 'white', mb: 1 }}>Company</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column',flexWrap:'wrap' }}>
                <Link underline='hover' color='white'>About us</Link>
                <Link underline='hover' color='white'>Contact</Link>
                <Link underline='hover' color='white'>Jobs</Link>
                <Link underline='hover' color='white'>Press kit</Link>
              </Box>
            </nav>
            <nav>
              <Typography sx={{ color: 'white', mb: 1 }}>Legal</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column',flexWrap:'wrap' }}>
                <Link underline='hover' color='white'>Terms of use</Link>
                <Link underline='hover' color='white'>Privacy policy</Link>
                <Link underline='hover' color='white'>Cookie Policy</Link>
              </Box>
            </nav>
            <nav >
              <Typography sx={{ color: 'white', mb: 1 }}>Social Media</Typography>
              <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1,flexWrap:'wrap'}}>
                <Link underline='hover' color='white'><img src='./src/assets/images/footer-image/x.jpg'
                  width={'40px'} height={'40px'} /></Link>
                <Link underline='hover' color='white'><img src='./src/assets/images/footer-image/facebook.jpg'
                  width={'40px'} height={'40px'} /></Link>
                <Link underline='hover' color='white'><img src='./src/assets/images/footer-image/instagram.jpg'
                  width={'40px'} height={'40px'} /></Link>
              </Box>
            </nav>
          </Box>

        </Box>
      </Container>



    </Box>
  )
}
