import React from "react";
import ProductCard from "../../components/ProductCard";
import { products } from "../../util/data";

export default function Planting() {
  const plantingProducts = products.filter((product) => {
    return product.category === "planting";
  });
  return (
    <section className="products">
      {plantingProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
}
