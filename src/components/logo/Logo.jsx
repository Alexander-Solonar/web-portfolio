import { Link } from "react-router-dom";
import icons from "../../assets/icons/icons.svg";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={css.logo}>
      <svg width={140} height={36}>
        <use href={`${icons}#icon-logo`} />
      </svg>
    </Link>
  );
};

export default Logo;
