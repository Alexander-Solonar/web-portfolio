import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Navigation = ({ classNameList }) => {
  const { theme } = useContext(Context);

  const linkClassName = ({ isActive }) => {
    const darkTheme = isActive ? css.active : css.link;
    const ligthTheme = isActive ? css.activeLigth : css.linkLigth;
    return !theme ? darkTheme : ligthTheme;
  };

  return (
    <nav className={css.nav}>
      <ul className={css[`${classNameList}`]}>
        <li>
          <NavLink className={linkClassName} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/about-me">
            About me
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
