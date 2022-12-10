import React from "react";
import ProductCard from "../../components/ProductCard";
import { products } from "../../util/data";

function Flowers() {
  const flowerProducts = products.filter((product) => {
    return product.category === "flower";
  });
  return (
    <section className="products">
      {flowerProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
}

export default Flowers;
