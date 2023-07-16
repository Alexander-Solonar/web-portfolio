import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import throttle from "lodash.throttle";
import clsx from "clsx";
import Logo from "../logo";
import Navigation from "../navigation/Navigation";
import ButtonBurger from "../buttonBurger/ButtonBurger";
import ButtonTheme from "../buttonTheme/ButtonTheme";
import css from "./AppBar.module.css";

const AppBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { theme } = useContext(Context);
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
    <div className={clsx(css["app-bar"], theme && css["app-bar-ligth"])}>
      <div className="container">
        <div className={css.content}>
          <Logo />
          {windowWidth > 767 && <Navigation classNameList={"list"} />}
          {windowWidth < 768 && <ButtonBurger />}
          <ButtonTheme />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
