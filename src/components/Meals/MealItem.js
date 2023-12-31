import MealItemForm from "./MealItemForm";

import classes from "../../styles/Meals/MealItem.module.css";

export default function MealItem(props) {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price.toFixed(2)}€</div>
      </div>
      <div>
        <MealItemForm id={props.id} name={props.name} price={props.price} />
      </div>
    </li>
  );
}
