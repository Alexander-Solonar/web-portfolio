import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import scss from "./Navigation.module.scss";

const Navigation = ({ classNameList }) => {
  const linkClassName = ({ isActive }) => {
    const className = isActive ? scss.active : scss.link;
    return className;
  };

  return (
    <nav className={scss.nav}>
      <ul className={scss[`${classNameList}`]}>
        <li>
          <NavLink className={linkClassName} to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className={linkClassName} to="/gallery">
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/contacts">
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/summary">
            Summary
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

Navigation.propTypes = {
  classNameList: PropTypes.string.isRequired,
};
