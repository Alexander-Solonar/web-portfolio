import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";
import css from "./Navigation.module.css";

const Navigation = ({ classNameList }) => {
  const { theme } = useContext(Context);

  const linkClassName = ({ isActive }) => {
    const darkTheme = isActive ? css.active : css.link;
    const lightTheme = isActive ? css.activeLight : css.linkLight;
    return !theme ? darkTheme : lightTheme;
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
