import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/product/Product";
import ProtectedRouter from "./ProtectedRouter";
import Checkout from "./pages/checkout/Checkout";
import ProfileLayout from "./pages/profile/ProfileLayout";
import { Info } from "lucide-react";
import ProfileOrders from "./pages/profile/ProfileOrders";
import ProfileInfo from "./pages/profile/ProfileInfo";
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
            element: 
            <ProtectedRouter>
                <Cart />
            </ProtectedRouter>
        },
        {
            path: "/checkout",
            element: 
            <ProtectedRouter>
                <Checkout />
            </ProtectedRouter>
        },
        {
           path: "/profile",
           element: 
           <ProtectedRouter>
               <ProfileLayout />
           </ProtectedRouter>,
           children: [
            {
                index: true,
                element: <ProfileInfo />
            },
            {
                path: "orders",
                element: <ProfileOrders />
            },
            
           ]
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