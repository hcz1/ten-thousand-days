import style from "./Input.module.scss";
import classnames from "classnames";
interface Props {
  value?: string;
  placeholder?: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<Props> = ({ type, value, placeholder, onChange }) => {
  return (
    <input
      required
      className={classnames(style.input, value && style.visited)}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      max={
        type === "date"
          ? new Date().toLocaleDateString().split("/").reverse().join("-")
          : undefined
      }
    />
  );
};

export default Input;
