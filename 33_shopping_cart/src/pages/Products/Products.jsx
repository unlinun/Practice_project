import React from "react";
import ProductCard from "../../components/ProductCard";

function Products({ products, setAllProducts }) {
  console.log(products);
  return (
    <section className="products">
      {products?.map((product) => {
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

export default Products;
