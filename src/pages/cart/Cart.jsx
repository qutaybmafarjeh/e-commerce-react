import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Chip
} from "@mui/material";
import useCart from "../../hooks/useCart";
import useRemoveFromCart from "../../hooks/useRemoveFromCart";
import useUpdateCartItem from "../../hooks/useUpdateCartItem";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useCart();

  const { mutate: removeItem, isPending } = useRemoveFromCart();
  const { mutate: updateItem, isPending: isUpdating } = useUpdateCartItem();

  const handleUpdate = (productId, action) => {
    const item = data.items.find((i) => i.productId == productId);
    if (action == "+") {
      updateItem({ productId, count: item.count + 1 });
    } else {
      action == "-";
      updateItem({ productId, count: item.count - 1 });
    }
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifycontent="center"
        alignitems="center"
        minheight="60vh"
      >
        <CircularProgress size={48} thickness={4} />
      </Box>
    );
  }

  if (isError) {
    return (
      <Container maxWidth="md" sx={{ mt: 10, textAlign: "center" }}>
        <Typography color="error" variant="h6">
          Error loading cart: {error?.message || isError.message}
        </Typography>
      </Container>
    );
  }

  const subtotal = data?.items?.reduce((acc, item) => acc + (item.totalPrice || item.price * item.count), 0) || 0;

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 10 }}>
      <Stack direction="row" alignitems="center" spacing={1.5} sx={{ mb: 4 }}>
        <ShoppingCartOutlinedIcon color="primary" sx={{ fontSize: 36 }} />
        <Typography variant="h4" fontWeight="700" color="text.primary">
          {t("Cart")}
        </Typography>
        <Chip
          label={`${data?.items?.length || 0} ${t("Items")}`}
          color="primary"
          variant="outlined"
          size="small"
          sx={{ ml: 1, fontWeight: 600 }}
        />
      </Stack>

      {!data?.items || data.items.length === 0 ? (
        <Paper
          elevation={0}
          sx={{
            p: 6,
            textAlign: "center",
            borderRadius: 4,
            border: "1px dashed",
            borderColor: "divider",
            bgcolor: "background.paper"
          }}
        >
          <ShoppingBagOutlinedIcon sx={{ fontSize: 72, color: "text.secondary", mb: 2 }} />
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {t("Your cart is empty")}
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
            sx={{ mt: 2, borderRadius: 2.5, px: 3, py: 1 }}
          >
            {t("Continue Shopping")}
          </Button>
        </Paper>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <TableContainer
              component={Paper}
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                overflow: "hidden"
              }}
            >
              <Table>
                <TableHead sx={{ bgcolor: "action.hover" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700, py: 2 }}>{t("Product")}</TableCell>
                    <TableCell sx={{ fontWeight: 700, py: 2 }}>{t("Price")}</TableCell>
                    <TableCell sx={{ fontWeight: 700, py: 2, textAlign: "center" }}>{t("Quantity")}</TableCell>
                    <TableCell sx={{ fontWeight: 700, py: 2 }}>{t("Total")}</TableCell>
                    <TableCell sx={{ fontWeight: 700, py: 2, textAlign: "right" }}>{t("Actions")}</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {data.items.map((item) => (
                    <TableRow key={item.id} hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Avatar
                            variant="rounded"
                            sx={{
                              width: 48,
                              height: 48,
                              bgcolor: "primary.light",
                              color: "primary.contrastText",
                              fontWeight: 700
                            }}
                          >
                            {item.productName ? item.productName.charAt(0).toUpperCase() : "P"}
                          </Avatar>
                          <Box>
                            <Typography variant="subtitle2" fontWeight="600">
                              {item.productName}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              ID: {item.productId}
                            </Typography>
                          </Box>
                        </Stack>
                      </TableCell>

                      <TableCell>
                        <Typography variant="body2" fontWeight="500">
                          ${item.price}
                        </Typography>
                      </TableCell>

                      <TableCell align="center">
                        <Box
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            border: "1px solid",
                            borderColor: "divider",
                            borderRadius: 2,
                            px: 0.5,
                            py: 0.25,
                            bgcolor: "background.paper"
                          }}
                        >
                          <IconButton
                            size="small"
                            disabled={item.count <= 1 || isUpdating}
                            onClick={() => handleUpdate(item.productId, "-")}
                            sx={{ borderRadius: 1.5 }}
                          >
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                          <Typography sx={{ px: 1.5, minWidth: 24, textAlign: "center", fontWeight: 600 }}>
                            {item.count}
                          </Typography>
                          <IconButton
                            size="small"
                            disabled={isUpdating}
                            onClick={() => handleUpdate(item.productId, "+")}
                            sx={{ borderRadius: 1.5 }}
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </TableCell>

                     
                      <TableCell>
                        <Typography variant="subtitle2" fontWeight="700" color="primary.main">
                          ${item.totalPrice}
                        </Typography>
                      </TableCell>

                    
                      <TableCell align="right">
                        <IconButton
                          color="error"
                          disabled={isPending}
                          onClick={() => removeItem(item.productId)}
                          sx={{
                            bgcolor: "error.50",
                            "&:hover": { bgcolor: "error.100" }
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            
            <Box sx={{ mt: 3 }}>
              <Button
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate("/")}
                sx={{ borderRadius: 2.5, textTransform: "none", px: 3, py: 1 }}
              >
                {t("Continue Shopping")}
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                p: 1
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="700" gutterBottom>
                  {t("Order Summary")}
                </Typography>

                <Stack spacing={2} sx={{ my: 3 }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography color="text.secondary">{t("Subtotal")}</Typography>
                    <Typography fontWeight="600">${subtotal.toFixed(2)}</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography color="text.secondary">{t("Shipping")}</Typography>
                    <Typography color="success.main" fontWeight="600">
                      {t("Free")}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle1" fontWeight="700">
                      {t("Total")}
                    </Typography>
                    <Typography variant="h5" fontWeight="800" color="primary.main">
                      ${subtotal.toFixed(2)}
                    </Typography>
                  </Stack>
                </Stack>

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={() => navigate("/checkout")}
                  sx={{
                    borderRadius: 3,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: 2
                  }}
                >
                  {t("Proceed to Checkout")}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}