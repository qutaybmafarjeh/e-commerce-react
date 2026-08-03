import { Box, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import useCart from "../../hooks/useCart";
import useRemoveFromCart from "../../hooks/useRemoveFromCart";
import useUpdateCartItem from "../../hooks/useUpdateCartItem";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';



export default function Cart() {

  const { data, isLoading, isError } = useCart();

  const { mutate: removeItem, isPending } = useRemoveFromCart();
  const { mutate: updateItem, isPending: isUpdating } = useUpdateCartItem();
  const handleUpdate = (productId, action) => {

    const item = data.items.find(i => i.productId == productId);
    if (action == '+') {
      updateItem({ productId, count: item.count + 1 });
    } else {
      (action == '-')
      updateItem({ productId, count: item.count - 1 });
    }
   
  }
  

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
            <TableCell>Product Id</TableCell>
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
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <IconButton size="small" disabled={item.count <= 1} >
                      <RemoveIcon onClick={() => handleUpdate(item.productId, '-')}  />
                    </IconButton>
                    <Typography>{item.count}</Typography>
                    <IconButton size="small" >
                      <AddIcon onClick={() => handleUpdate(item.productId, '+')} />
                    </IconButton>

                  </Box>
                </TableCell>
                <TableCell>{item.price}$</TableCell>
                <TableCell>{item.totalPrice}</TableCell>
                <TableCell>
                  <Button color="error" disabled={isPending} onClick={() => removeItem(item.productId)}>Remove</Button>
                </TableCell>

              </TableRow>
            )
            )}




          </TableBody>

        </Table>
      </TableContainer>

    </Box>


  )
}
