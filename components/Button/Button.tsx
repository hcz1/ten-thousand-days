import { ReactNode } from "react";
import Style from "./Button.module.scss";

interface ButtonProps {
  title: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ title, ...props }) => {
  return (
    <button className={Style.button} {...props}>
      {title}
    </button>
  );
};

export default Button;
