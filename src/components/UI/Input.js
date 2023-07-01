import React from "react";

import classes from "../../styles/UI/Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={ref}
        type="number"
        step="1"
        min="1"
        defaultValue="1"
        id={props.id}
      />
    </div>
  );
});

export default Input;
