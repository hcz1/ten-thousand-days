import type { NextPage } from "next";
import Image from "next/image";
import style from "./home.module.scss";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import planet from "../public/planet_2x.png";
import ellipse from "../public/Ellipse.png";

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
      <Image
        priority
        className={style.planet}
        src={planet}
        // height={400}
        // width={500}
        alt="Picture of a planet"
      />
      <div className={style.ellipseContainer}>
        <Image
          priority
          className={style.ellipse}
          src={ellipse}
          layout="responsive"
          // height={400}
          // width={500}
          alt="Picture of a planet"
        />
      </div>
    </div>
  );
};

export default Home;
