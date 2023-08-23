import { NavLink } from "react-router-dom";
import css from "./Navigation.module.scss";

const Navigation = ({ classNameList }) => {
  const linkClassName = ({ isActive }) => {
    const className = isActive ? css.active : css.link;
    return className;
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
          <NavLink className={linkClassName} to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/my-summary">
            My Summary
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
