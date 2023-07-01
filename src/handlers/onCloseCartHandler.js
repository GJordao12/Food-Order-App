import { uiActions } from "../store/ui-reducer";

export default function onCloseCartHandler(dispatch) {
  dispatch(uiActions.showCart());
}
