import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import classes from "../../styles/UI/Modal.module.css";

import onCloseCartHandler from "../../handlers/onCloseCartHandler";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

export default function Modal(props) {
  const dispatch = useDispatch();

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={() => onCloseCartHandler(dispatch)} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
