import { TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "lucide-react";
import useCart from "../../hooks/useCart";


export default function Cart() {

  const { data, isLoading, isError } = useCart();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <div>Error loading cart {isError.message}</div>;
  }



  console.log(data);



  return (

    <Box coponent="section">
      <Typography varient='h1'  >
        Cart
      </Typography>

      <TableContainer>
        <Table>

          <TableHead>

            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Actions</TableCell>

          </TableHead>

          <TableBody>



            {data.items.map((item) =>
            (
              <TableRow key={item.id}>
                 <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.prouductId}</TableCell>
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
