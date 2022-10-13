import React from "react";
import "./style.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  text: string;
  theme?: string;
}

function Button({icon, text, theme = 'default', ...props}: ButtonProps) {
  return (
    <button className={`buttonMyLocation --${theme}`} {...props}>
      {icon ? icon : <></>}
      <span>{text}</span>
    </button>
  )
}

export default Button;
