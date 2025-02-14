import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage.jsx";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <div className="flex flex-col justify-between h-screen w-screen">
        <Header />
        <Routes>
          <Route path="/BluStore/" element={<Home />} />
          <Route path="/BluStore/productpage" element={<ProductPage />} />
          <Route path="/BluStore/account" element={<Account />} />
          <Route path="/BluStore/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
