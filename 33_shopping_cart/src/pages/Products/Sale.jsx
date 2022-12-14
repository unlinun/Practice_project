import React from "react";
import ProductCard from "../../components/ProductCard";

function Sale({ products, setAllProducts }) {
  const saleProducts = products.filter((product) => {
    return product.sale;
  });
  return (
    <section className="products">
      {saleProducts.map((product) => {
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

export default Sale;
