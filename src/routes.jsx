import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";

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
            element: <Cart />
        },
        {
            path: "/product",
            element: <Product />
        }
        
    ]
  },
]);

export default router;