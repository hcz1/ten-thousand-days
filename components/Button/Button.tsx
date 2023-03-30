import Style from "./Button.module.scss";

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <button className={Style.button} {...props}>
      <span>Submit</span>
      <span>💫</span>
    </button>
  );
};

export default Button;
