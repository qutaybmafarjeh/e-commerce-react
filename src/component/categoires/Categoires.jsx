import { Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useCategories from '../../hooks/useCategories';
import { useTranslation } from 'react-i18next';



export default function Categoires() {
  
  const { data, isLoading, isError, error } = useCategories();
  const { t } = useTranslation();
  

  if (isLoading) return <CircularProgress />

  if (isError) return <Typography color="red">{error}</Typography>





  return (
   
    <Box className="products" component="section" sx={{mt:4}}>
        <Container maxWidth>
            <Typography variant="h1" component="h2" sx={{ textAlign: 'center', marginTop: 2 }}>
                {t('Categoires')}
            </Typography>

            <Grid container spacing={{ xs: 2, md: 2 }} sx={{
                justifyContent: 'center', textAlign: 'center', alignItems: 'center',
                marginTop: 2, marginLeft: 2, marginRight: 2
            }}>
                {data.response.data.map((category) => (
                    <Grid size={{ sm: 6, md: 4 }} key={category.id}>
                        <Link to={`/Categories/${category.id}`} style={{ textDecoration: 'none' }}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                               
                                <CardContent>
                                    <Typography variant="h5" component="h3">
                                        {category.name}
                                        
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}






            </Grid>

        </Container>
        </Box>

  )
}


