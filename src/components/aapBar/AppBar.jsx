import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import throttle from "lodash.throttle";
import clsx from "clsx";
import Logo from "../logo";
import Navigation from "../navigation";
import BtnBurger from "../btnBurger";
import BtnTheme from "../btnTheme";
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
    }, 250);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsOpenMenu]);

  return (
    <div className={clsx(css["app-bar"], theme && css["app-bar-light"])}>
      <div className="container">
        <div className={css.content}>
          <Logo />
          <div className={css.box}>
            {windowWidth > 767 && <Navigation classNameList={"list"} />}
            {windowWidth < 768 && <BtnBurger />}
            <BtnTheme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
