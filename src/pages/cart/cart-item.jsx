import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  function handleAdd(id, e) {
    e.stopPropagation();
    addToCart(id);
  }

  function handleRemove(id, e) {
    e.stopPropagation();
    removeFromCart(id);
  }

  function handleUpdate(id, e) {
    e.stopPropagation();
  }

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={(e) => handleRemove(id, e)}> - </button>
          <input onClick={(e) => e.stopPropagation()} value={cartItems[id]} />
          <button onClick={(e) => handleAdd(id, e)}> + </button>
        </div>
      </div>
    </div>
  );
};
