import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import useCart from "../../hooks/useCart";



export default function Cart() {

  const { data, isLoading, isError } = useCart();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <div>Error loading cart {isError.message}</div>;
  }


 



  return (

    <Box coponent="section">
      <Typography varient='h1'  >
        Cart
      </Typography>

      <TableContainer>
        <Table>

          <TableHead>

            <TableCell>Product Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Actions</TableCell>

          </TableHead>

          <TableBody>



            {data.items.map((item) =>
            (
              <TableRow key={item.id}>
                 <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.productId}</TableCell>
                   <TableCell>{item.price}$</TableCell>
                    <TableCell>{item.count}</TableCell>
                     <TableCell>{item.totalPrice}</TableCell>
                

              </TableRow>
            )
            )}




          </TableBody>

        </Table>
      </TableContainer>

    </Box>


  )
}
