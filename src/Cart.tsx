import React from "react";
import DeleteIcon from "./images/icon-delete.svg";
import CartIcon from "./images/icon-cart.svg?react";
import { ProductItem } from "./App";

interface CartProps {
  productList: ProductItem[];
  removeFromCart: (id: number) => void;
}

const Cart = ({ productList, removeFromCart }: CartProps) => {
  const [openCart, setOpenCart] = React.useState(false);
  const cartRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (cartRef.current) cartRef.current.focus();
  }, [openCart]);

  return (
    <>
      {openCart && (
        <div
          ref={cartRef}
          tabIndex={-1}
          onBlur={() => setOpenCart(false)}
          className="cart-details"
        >
          <p className="cart-title">Cart</p>
          {productList.length === 0 && (
            <p className="cart-empty">Your cart is empty</p>
          )}
          {productList.length > 0 && (
            <ul className="cart-list">
              {productList.map((item) => (
                <li className="cart-item" key={item.product.id}>
                  <img
                    className="cart-item-image"
                    src={item.product.imageList[0].thumbnail}
                    alt="cart-item"
                  />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{item.product.name}</p>
                    <div className="cart-item-price">
                      <p className="cart-item-price-quantity">
                        <span>${item.product.price.toFixed(2)}</span>
                        <span>x</span>
                        <span>{item.quantity}</span>
                        <span className="cart-item-price-total">
                          ${(item.quantity * item.product.price).toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                  <button className="btn-delete" onClick={() => removeFromCart(item.product.id)}>
                    <img src={DeleteIcon} alt="delete" />
                  </button>
                </li>
              ))}
              <li>
                <button className="btn-checkout">Checkout</button>
              </li>
            </ul>
          )}
        </div>
      )}
      <button className="btn-cart" onClick={() => setOpenCart(!openCart)}>
        {productList.length > 0 && (
          <p className="cart-quantity">
            {productList.reduce((current, item) => item.quantity + current, 0)}
          </p>
        )}
        <CartIcon className="cart-icon" />
      </button>
    </>
  );
};

export default Cart;
