import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={css.logo}>
      <img src={logo} alt="logo" width="160" />
    </Link>
  );
};

export default Logo;
