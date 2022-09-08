import style from "./Input.module.scss";
import classnames from "classnames";
interface Props {
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      className={classnames(style.input, value && style.visited)}
      type="text"
      placeholder="First name"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
// box-shadow: 0px 0px 12px 0px #57CCC940;
