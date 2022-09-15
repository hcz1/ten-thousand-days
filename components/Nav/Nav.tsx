import Image from "next/image";
import style from "./Nav.module.scss";
const Nav = () => {
  return (
    <nav className={style.nav}>
      <div>🌎 10,000 Days</div>
      <div className={style.share}>
        <span>Tell your friends </span>
        <Image
          priority
          src={"/Share.svg"}
          width={16}
          height={22}
          alt="Share button icon"
        />
      </div>
    </nav>
  );
};
export default Nav;
