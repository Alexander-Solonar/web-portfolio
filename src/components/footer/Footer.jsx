import { useContext } from "react";
import { Context } from "../../context/Context";
import Navigation from "../navigation/Navigation";
import clsx from "clsx";
import Logo from "../logo/Logo";
import ContactFooter from "../contactFooter/ContactFooter";
import scss from "./Footer.module.scss";

const Footer = () => {
  const { theme } = useContext(Context);

  return (
    <footer className={clsx(scss.footer, theme && scss["footer-light"])}>
      <div className="container">
        <div className={scss.content}>
          <Navigation classNameList={"list-footer"} />
          <ContactFooter />
          <div className={scss["block-copyright"]}>
            <Logo />
            <p className={scss.text}> Odesa, Ukraine</p>
            <p> &#169; 2023, Solonar Oleksandr</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
