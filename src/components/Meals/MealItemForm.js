import { useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-reducer";
import Input from "../UI/Input";

import classes from "../../styles/Meals/MealItemForm.module.css";

export default function MealItemForm(props) {
  const dispatch = useDispatch();

  const amountInputRef = useRef(1);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(
      cartActions.addToCart({
        id: props.id,
        name: props.name,
        price: +props.price,
        amount: +amountInputRef.current.value,
      })
    );
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input ref={amountInputRef} label="Amount" id={"amount_" + props.id} />
      <button type="submit">Add to Cart</button>
    </form>
  );
}
