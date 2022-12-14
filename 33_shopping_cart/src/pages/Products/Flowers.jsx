import React from "react";
import ProductCard from "../../components/ProductCard";

function Flowers({ products, setAllProducts }) {
  const flowerProducts = products.filter((product) => {
    return product.category === "flower";
  });
  return (
    <section className="products">
      {flowerProducts.map((product) => {
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

export default Flowers;
