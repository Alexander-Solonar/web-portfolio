import { useContext } from "react";
import { Context } from "../../context/Context";
import Navigation from "../navigation/Navigation";
import clsx from "clsx";
import Logo from "../logo/Logo";
import ContactFooter from "../contactFooter/ContactFooter";
import css from "./Footer.module.scss";

const Footer = () => {
  const { theme } = useContext(Context);

  return (
    <footer className={clsx(css.footer, theme && css["footer-light"])}>
      <div className="container">
        <div className={css.content}>
          <Navigation classNameList={"list-footer"} />
          <ContactFooter />
          <div className={css["box-copyright"]}>
            <Logo />
            <p>Copyright &#169; 2023, Solonar O.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
