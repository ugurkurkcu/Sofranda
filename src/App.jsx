import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Restaurant from "./pages/Restaurant";
import Product from "./pages/Product";
import { getCart } from "./redux/actions/basketActions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurants/:id" element={<Restaurant />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
