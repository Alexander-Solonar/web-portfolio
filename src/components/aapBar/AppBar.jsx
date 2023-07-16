import Navigation from "../navigation/Navigation";
import Logo from "../logo";
import css from "./AppBar.module.css";
import ButtonTheme from "../buttonTheme/ButtonTheme";
import { useContext, useEffect, useState } from "react";
import throttle from "lodash.throttle";
import ButtonBurger from "../buttonBurger/ButtonBurger";
import { Context } from "../../context/Context";

const AppBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { setIsOpenMenu } = useContext(Context);

  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 767) {
        setIsOpenMenu(false);
      }
    }, 500);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsOpenMenu]);

  return (
    <div className={css.content}>
      <Logo />
      {windowWidth > 767 && <Navigation classNameList={"list"} />}
      {windowWidth < 768 && <ButtonBurger />}
      <ButtonTheme />
    </div>
  );
};

export default AppBar;
