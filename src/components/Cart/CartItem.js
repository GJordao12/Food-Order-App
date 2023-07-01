import { useDispatch } from "react-redux";

import classes from "../../styles/Cart/CartItem.module.css";

import { cartActions } from "../../store/cart-reducer";

export default function CartItem(props) {
  const dispatch = useDispatch();

  const onRemoveHandler = () => {
    dispatch(
      cartActions.removeFromCart({
        id: props.id,
      })
    );
  };

  const onAddHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: props.id,
        name: props.name,
        price: +props.price,
        amount: 1,
      })
    );
  };

  return (
    <li className={classes.cartItem}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price.toFixed(2)}€</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveHandler}>−</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
}
