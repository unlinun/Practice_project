import React from "react";
import ProductCard from "../../components/ProductCard";
import { products } from "../../util/data";

function Products() {
  return (
    <section className="products">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
}

export default Products;
