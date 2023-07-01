import { useDispatch, useSelector } from "react-redux";

import CartIcon from "./CartIcon";

import classes from "../../styles/Header/CartButton.module.css";

import onCloseCartHandler from "../../handlers/onCloseCartHandler";

export default function CartButton(props) {
  const dispatch = useDispatch();
  const cartTotalItems = useSelector((store) => store.cart.totalItems);

  return (
    <button
      className={classes.button}
      onClick={() => onCloseCartHandler(dispatch)}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartTotalItems}</span>
    </button>
  );
}
