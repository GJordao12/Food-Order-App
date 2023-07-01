import classes from "../../styles/UI/Cart.module.css";

export default function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
