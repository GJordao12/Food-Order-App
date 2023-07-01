import CartButton from "./CartButton";

import classes from "../../styles/Header/Header.module.css";

import mealsImage from "../../images/meals.jpg";

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div className={classes.mainImage}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}
