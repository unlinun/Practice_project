import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../util/data";

function ProductCard({ products, product, setAllProducts }) {
  const handleHeart = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, like: true };
      } else {
        return { ...product };
      }
    });
    setAllProducts(newProducts);
  };
  return (
    <div className="product__card">
      <Link to={`/products/${product.id}`}>
        <img className="card__img" src={product.image} alt="" />
      </Link>
      <div className="card__info">
        <div className="info__title">
          <p>{product.productName}</p>
          <img
            className="card__fav"
            onClick={() => handleHeart(product.id)}
            src={product.like ? icons.heartFull : icons.heartEmpty}
            alt="heart"
          />
        </div>
        <div className="info__price">TWD {product.price}</div>
      </div>
    </div>
  );
}

export default ProductCard;
