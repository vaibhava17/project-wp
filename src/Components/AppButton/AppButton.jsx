import React from "react";
import { Button } from "react-bootstrap";
import styles from "./AppButton.module.css";

function AppButton({ className, label, withBg = false, onClick, ...rest }) {
  let finalClassNames = "";
  if (withBg) {
    finalClassNames += `${styles.btnDark}`;
  } else {
    finalClassNames += `${styles.btnLight}`;
  }
  return (
    <Button
      className={finalClassNames + " " + className}
      onClick={onClick}
      {...rest}
    >
      {label}
    </Button>
  );
}

export default AppButton;
