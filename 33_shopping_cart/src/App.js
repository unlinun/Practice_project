import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShareLayout from "./components/ShareLayout";
import ShareProducts from "./components/ShareProducts";

import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import Planting from "./pages/Products/Planting";
import ShoppingCart from "./pages/ShoppingCart";
import Sale from "./pages/Products/Sale";
import Flowers from "./pages/Products/Flowers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ShareProducts />}>
            <Route index element={<Products />} />
            <Route path="/products/planting" element={<Planting />} />
            <Route path="/products/flowers" element={<Flowers />} />
            <Route path="/products/sale" element={<Sale />} />
          </Route>
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
