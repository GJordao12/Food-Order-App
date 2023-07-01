import { useDispatch, useSelector } from "react-redux";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import classes from "../../styles/Cart/Cart.module.css";

import onCloseCartHandler from "../../handlers/onCloseCartHandler";

export default function Cart() {
  const cart = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const onOrderHandler = () => {
    console.log("Ordering...");
  };

  return (
    <Modal>
      {!cart.hasItems && (
        <p style={{ textAlign: "center" }}>No itens on the cart.</p>
      )}
      {cart.hasItems && (
        <>
          <ul className={classes.cartItems}>
            {cart.items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
              />
            ))}
          </ul>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{cart.totalAmount.toFixed(2)}€</span>
          </div>
        </>
      )}
      <div className={classes.actions}>
        <button
          className={classes.buttonAlt}
          onClick={() => onCloseCartHandler(dispatch)}
        >
          Close
        </button>
        {cart.hasItems && (
          <button className={classes.button} onClick={onOrderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}
