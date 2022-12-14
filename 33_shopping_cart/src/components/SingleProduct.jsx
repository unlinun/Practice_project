import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { icons } from "../util/data";

function SingleProduct({ products, setAllProducts }) {
  // 使用 useParams 來找到 /:id 的id 值
  const { productId } = useParams();
  const currentProduct = products.find((product) => product.id === productId);
  const [count, setCount] = useState(0);

  const handleCount = (type) => {
    if (type === "minus") {
      setCount((prev) => {
        return prev <= 0 ? (prev = 0) : prev - 1;
      });
    } else {
      setCount((prev) => {
        return prev === currentProduct.quantity
          ? (prev = currentProduct.quantity)
          : prev + 1;
      });
    }
  };
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
  const handleAddToCart = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id && count !== 0) {
        return { ...product, cart: true, cartCount: count };
      } else {
        return { ...product };
      }
    });
    setAllProducts(newProducts);
  };

  return (
    <article className="single__container">
      <img
        className="single__img"
        src={currentProduct.image}
        alt={currentProduct.productName}
      />
      <div className="single__info">
        <div className="single__title">
          <div className="title__name">{currentProduct.productName}</div>
          <div className="title__price">NTD {currentProduct.price}</div>
        </div>
        <div className=" icons single__icons">
          <img className="icon" src={icons.share} alt="" />
          <img
            onClick={() => handleHeart(currentProduct.id)}
            className="icon"
            src={currentProduct.like ? icons.heartFull : icons.heartEmpty}
            alt="heart"
          />
        </div>
        <div className="single__count">
          <div className="count__number">
            數量：
            <img
              className="number__icon"
              src={icons.minus}
              alt="minus"
              onClick={() => handleCount("minus")}
            />
            <div className="number__box">{count}</div>
            <img
              className="number__icon"
              src={icons.plus}
              alt="plus"
              onClick={() => handleCount("plus")}
            />
          </div>
          <div className="count__last">庫存餘 {currentProduct.quantity}</div>
        </div>
        <div className="single__button">
          <button className="btn--buy">直接購買</button>
          <button
            className="btn--cart"
            onClick={() => handleAddToCart(currentProduct.id)}
          >
            加入購物車
          </button>
        </div>
      </div>
    </article>
  );
}

export default SingleProduct;
