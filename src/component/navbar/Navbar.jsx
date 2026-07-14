import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/useAuthStore';

export default function Navbar() {

  const navigator = useNavigate();
  const token = useAuthStore((state) => state.token);
  const Logout = useAuthStore((state) => state.Logout);

  const handleLogout = () => {
    Logout();
    navigator('/login');
  }



  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      {token ? <>
        <Link to="/login" component="button" onClick={handleLogout}>
          Logout
        </Link>
        <Link to="/cart">Cart</Link>
      </>: <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </>
}
    </nav>
  )
}
