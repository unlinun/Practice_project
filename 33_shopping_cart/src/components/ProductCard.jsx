import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      className="product__card"
      to={`/products/${product.category}/${product.id}`}
    >
      <img className="card__img" src={product.image} alt="" />
      <div className="card__info">
        <div className="info__title">
          <p>{product.productName}</p>
          <img
            className="card__fav"
            src={
              product.like
                ? "./images/heart-full.png"
                : "./images/heart-empty.png"
            }
            alt=""
          />
        </div>
        <div className="info__price">TWD {product.price}</div>
      </div>
    </Link>
  );
}

export default ProductCard;
