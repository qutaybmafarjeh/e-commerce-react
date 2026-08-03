import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";
import ProductDetails from "./component/products/productDetails";
import ProtectedRouter from "./ProtectedRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
           index: true,
            element: <Home />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/cart",
            element: 
            <ProtectedRouter>
                <Cart />
            </ProtectedRouter>
        },
       
        {
            path: "/product",
            element: <Product />
        },
        {
            path: "/products/:id",
            element: <ProductDetails />
        }
    ]
  },
]);

export default router;