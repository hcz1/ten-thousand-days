import type { NextPage } from "next";
import Image from "next/image";
import style from "./home.module.scss";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";

let didInit = false;
const Home: NextPage = () => {
  const [counter, setCounter] = useState(364928407);
  // useEffect(() => {
  //   if (!didInit) {
  //     didInit = true;
  //     const interval = setInterval(() => {
  //       setCounter((prev) => prev + 1);
  //     }, 5000);
  //     () => {
  //       clearInterval(interval);
  //     };
  //   }
  // }, []);
  return (
    <div className={style.container}>
      <Nav />
      <Form />
      <div className={style.counter}>
        <p>{counter.toLocaleString()}</p>
        <p>people know their 10,000th day on earth</p>
      </div>
      {/* <Image
        priority
        className={style.planet}
        src={"/planet.svg"}
        height={400}
        width={500}
        alt="Picture of a planet"
      /> */}
    </div>
  );
};

export default Home;
