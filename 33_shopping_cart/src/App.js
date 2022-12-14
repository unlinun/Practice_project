import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShareLayout from "./components/ShareLayout";
import ShareProducts from "./components/ShareProducts";
import { products } from "./util/data";
import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import Planting from "./pages/Products/Planting";
import ShoppingCart from "./pages/ShoppingCart";
import Sale from "./pages/Products/Sale";
import Flowers from "./pages/Products/Flowers";
import SingleProduct from "./components/SingleProduct";

export const AppContext = createContext();
function App() {
  const [allProducts, setAllProducts] = useState(products);
  return (
    <Router>
      <AppContext.Provider value={allProducts}>
        <Routes>
          <Route path="/" element={<ShareLayout products={allProducts} />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<ShareProducts />}>
              <Route
                index
                element={
                  <Products
                    products={allProducts}
                    setAllProducts={setAllProducts}
                  />
                }
              />
              <Route
                path="/products/planting"
                element={
                  <Planting
                    products={allProducts}
                    setAllProducts={setAllProducts}
                  />
                }
              />
              <Route
                path="/products/flowers"
                element={
                  <Flowers
                    products={allProducts}
                    setAllProducts={setAllProducts}
                  />
                }
              />
              <Route
                path="/products/sale"
                element={
                  <Sale
                    products={allProducts}
                    setAllProducts={setAllProducts}
                  />
                }
              />
              <Route
                path="/products/:productId"
                element={
                  <SingleProduct
                    products={allProducts}
                    setAllProducts={setAllProducts}
                  />
                }
              />
            </Route>
            <Route
              path="/shoppingcart"
              element={
                <ShoppingCart
                  products={allProducts}
                  setAllProducts={setAllProducts}
                />
              }
            />
          </Route>
        </Routes>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
