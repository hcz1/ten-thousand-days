import classnames from "classnames";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import style from "./Form.module.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  return (
    <div className={style.form}>
      <h1>
        Enter your birthday to see what date will be your 10,000th day on earth
        ✨
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={classnames(style.inputGroup)}>
          <Input
            type="text"
            placeholder="First Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
          <Input
            type="date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
            value={date}
          />
        </div>
        <Button title="Submit 💫" type="submit" />
      </form>
    </div>
  );
};
export default Form;
