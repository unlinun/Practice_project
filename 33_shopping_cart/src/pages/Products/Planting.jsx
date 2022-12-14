import React from "react";
import ProductCard from "../../components/ProductCard";

export default function Planting({ products, setAllProducts }) {
  const plantingProducts = products.filter((product) => {
    return product.category === "planting";
  });
  return (
    <section className="products">
      {plantingProducts.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            products={products}
            setAllProducts={setAllProducts}
          />
        );
      })}
    </section>
  );
}
