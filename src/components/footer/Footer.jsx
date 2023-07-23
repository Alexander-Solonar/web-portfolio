import { useContext } from "react";
import css from "./Footer.module.css";
import { Context } from "../../context/Context";
import Navigation from "../navigation/Navigation";
import clsx from "clsx";
import Logo from "../logo/Logo";

const Footer = () => {
  const { theme } = useContext(Context);

  return (
    <footer className={clsx(css.footer, theme && css["footer-light"])}>
      <div className="container">
        <div className={css.content}>
          <Navigation classNameList={"list-footer"} />
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
