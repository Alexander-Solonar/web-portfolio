import icons from "../../assets/icons/icons.svg";
import scss from "./Logo.module.scss";

const Logo = () => {
  return (
    <a
      href="https://alexander-solonar.github.io/web-portfolio"
      className={scss.logo}
    >
      <svg width={140} height={36}>
        <use href={`${icons}#icon-logo`} />
      </svg>
    </a>
  );
};

export default Logo;
