import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import MealsSummary from "./components/Meals/MealsSummary";
import MealsList from "./components/Meals/MealsList";

export default function App() {
  const cartIsVisible = useSelector((store) => store.ui.cartIsVisible);

  return (
    <>
      {cartIsVisible && <Cart />}
      <Header />
      <MealsSummary />
      <MealsList />
    </>
  );
}
