import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { icons } from "../util/data";

function ShoppingCart({ products, setAllProducts }) {
  const navigate = useNavigate();
  const cartItems = products.filter((product) => {
    return product.cart;
  });
  const [subtotal, setSubtotal] = useState(0);

  const handleAddToPayment = (id) => {
    return (e) => {
      const newProducts = products.map((product) => {
        if (product.id === id && e.target.checked) {
          return { ...product, addCart: true };
        } else if (product.id === id && !e.target.checked) {
          return { ...product, addCart: false };
        } else {
          return { ...product };
        }
      });
      setAllProducts(newProducts);
    };
  };
  const handleCount = (type, id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        const count = product.cartCount;
        if (type === "minus") {
          return { ...product, cartCount: count <= 0 ? 0 : count - 1 };
        } else {
          return {
            ...product,
            cartCount: count >= product.quantity ? product.quantity : count + 1,
          };
        }
      } else {
        return { ...product };
      }
    });
    setAllProducts(newProducts);
  };

  const handlePayment = () => {
    navigate("/");
  };

  const handleReturn = () => {
    navigate("/products");
  };

  // 當 products 改變，就改變 subtotal
  useEffect(() => {
    const total = products.reduce((pre, cur) => {
      return cur.addCart ? pre + cur.cartCount * cur.price : pre;
    }, 0);
    setSubtotal(total);
  }, [products]);

  return (
    <div className="cart__container">
      <aside className="cart">
        <h3>My Shopping Cart</h3>
        <div className="cart__info">
          <div className="cart__items">
            {cartItems.map((item) => {
              return (
                <div className="cart__item" key={item.id}>
                  <input
                    type="checkbox"
                    onClick={handleAddToPayment(item.id)}
                  />
                  <img className="cart__img" src={item.image} alt="" />
                  <p>{item.productName}</p>
                  <div className="count__box">
                    <img
                      className="icon"
                      src={icons.minus}
                      alt="minus"
                      onClick={() => handleCount("minus", item.id)}
                    />
                    <p className="count__number">{item.cartCount}</p>
                    <img
                      className="icon"
                      src={icons.plus}
                      alt="plus"
                      onClick={() => handleCount("plus", item.id)}
                    />
                  </div>
                  <p>NTD {item.price}</p>
                </div>
              );
            })}
          </div>
          <div className="cart__price">
            <div className="price__return" onClick={handleReturn}>
              <img className="return" src={icons.returnImg} alt="return" />
              <p>Continue shopping</p>
            </div>
            <div className="price__total">
              <p>subtotal: {subtotal}</p>
              <p>shipping: 0</p>
              <div className="divide"></div>
              <h4>TOTAL: TWD {subtotal + 0}</h4>
            </div>
          </div>
        </div>
      </aside>
      <aside className="payment">
        <h3>Payment Info.</h3>
        <div className="payment__info">
          <form onSubmit={handlePayment}>
            <legend>Payment Method</legend>
            <div className="input__item">
              <input type="radio" />
              <label>credit card</label>
            </div>
            <div className="input__item">
              <input type="radio" />
              <label>貨到付款</label>
            </div>
            <input className="submit" type="submit" value="CHECK OUT" />
          </form>
        </div>
      </aside>
    </div>
  );
}

export default ShoppingCart;
