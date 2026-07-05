import React from 'react'
import useProducts from '../../hooks/useProducts';
import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import { data } from 'react-router-dom';


    const Products = () => {


    const { data, products, isLoading, isError, error } = useProducts();

    if (isLoading) {
        return <CircularProgress />;
    }
    

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    

  return (
    <Box className="products" component="section">
    <Typography variant="h1" component="h2">
      Products
    </Typography>

    <Grid container spacing={{ xs: 2, md: 2 }} sx={{justifyContent: 'center', alignItems: 'center',
         marginTop: 2,marginLeft: 2, marginRight: 2}}>
        {data.response.data.map((product) => (
            <Grid size={{ sm: 6, md: 4 }} key={product.id}>
                <Card>
                    <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.name}
                        sx={{width:200}}
                    ></CardMedia>
                    <CardContent>
                        <Typography variant="h5" component="h3">
                            {product.name}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))}
                   
                    

              


            </Grid>


    </Box>

        


  )
}

    export default Products
