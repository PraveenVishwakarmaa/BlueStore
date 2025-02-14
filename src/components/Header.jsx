import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/blue-store-logo.png";
import cartLogo from "../assets/cart.png";


const Header = () => {
  const { cart } = useCart();
  return (
    <div className="py-7 px-10 text-black flex items-center justify-between">
      <a href=""><img src={logo} className=" h-10 w-22 rounded"/></a>
      <div className="flex gap-10 text-lg">
        <Link to="/">Home</Link>
        <Link to="/productpage">Product</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/account">Account</Link>
        <Link to="/cart"><img src={cartLogo} className="inline h-7 w-7"/>{cart.length}</Link>
      </div>
    </div>
  );
};

export default Header;
