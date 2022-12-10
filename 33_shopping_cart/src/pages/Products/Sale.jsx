import React from "react";
import ProductCard from "../../components/ProductCard";
import { products } from "../../util/data";

function Sale() {
  const saleProducts = products.filter((product) => {
    return product.sale;
  });
  return (
    <section className="products">
      {saleProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
}

export default Sale;
