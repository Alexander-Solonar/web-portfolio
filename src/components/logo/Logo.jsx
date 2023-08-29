import { Link } from "react-router-dom";
import icons from "../../assets/icons/icons.svg";
import scss from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link to="/" className={scss.logo}>
      <svg width={140} height={36}>
        <use href={`${icons}#icon-logo`} />
      </svg>
    </Link>
  );
};

export default Logo;
