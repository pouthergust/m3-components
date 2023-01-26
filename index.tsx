import React from "react";
import styles from "./styles.css";

interface ToastProps {
  visible: boolean
  text: string
  status: StatusProps
}

export type StatusProps = "success" | "failed" | "warning";

function Toast({ visible, text, status }: ToastProps) {
  return (
    <div
      className={`
        ${styles.toast} 
        ${styles[status]}
        ${visible ? styles.visible : ""}
      `}
    >
      {text}
    </div>
  )
}

export default Toast
