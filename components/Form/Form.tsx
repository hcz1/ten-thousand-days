import classnames from "classnames";
import React, { useCallback, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import style from "./Form.module.scss";
const SECONDS_IN_DAY = 86400;
const TEN_THOUSAND_DAYS_IN_SECONDS = SECONDS_IN_DAY * 10000;

const howManyDaysSince = (unixTime: number) => {
  const date = new Date();
  const todayInSeconds = date.getTime() / 1000;
  return ((todayInSeconds - unixTime) / SECONDS_IN_DAY).toFixed(2);
};

const tenThousandthDay = (
  unixBirthday: number,
  specificDayInSeconds = TEN_THOUSAND_DAYS_IN_SECONDS
) => {
  const dayInSeconds = unixBirthday + specificDayInSeconds;
  const date = new Date(dayInSeconds * 1000);
  const ageInSeconds = date.getTime() / 1000 - unixBirthday;
  return {
    date: date.toDateString(),
    age: Math.abs(ageInSeconds / 31536000).toFixed(2),
  };
};
type State =
  | {
      age?: string;
      date?: string;
      currDays?: string;
    }
  | undefined;
const Form = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [info, setInfo] = useState<State>();

  const handleClick = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      const birthdayUnix = new Date(date).getTime() / 1000;
      const currDays = howManyDaysSince(birthdayUnix);
      const { date: thatDay, age } = tenThousandthDay(birthdayUnix);

      setInfo({ date: thatDay, age, currDays });
    },
    [date]
  );
  return (
    <div className={style.scene}>
      <div className={style.card}>
        <div className={classnames(style.form, style.cardFace)}>
          <h1>
            Enter your birthday to see what date will be your 10,000th day on
            earth ✨
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
            <Button
              title="Submit 💫"
              type="submit"
              onClick={(e) => {
                if (name && date) {
                  handleClick(e);
                }
              }}
            />
          </form>
          {info && (
            <div className={style.info}>
              {<p>Age: {info?.age}</p>}
              {<p>Date: {info?.date}</p>}
              {<p>Days Alive: {info?.currDays}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Form;
