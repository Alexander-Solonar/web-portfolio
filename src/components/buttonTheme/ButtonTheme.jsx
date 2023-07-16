import { useContext } from "react";
import { Context } from "../../context/Context";
import icons from "../../assets/icons/icons.svg";
import css from "./ButtonTheme.module.css";

const ButtonTheme = () => {
  const { setTheme } = useContext(Context);
  const { theme } = useContext(Context);

  const handleCheckboxChange = (event) => {
    setTheme(event.target.checked);
  };

  return (
    <label className={css.switch}>
      <svg className={css["icon-moon"]} width="16" height="16">
        <use href={`${icons}#icon-moon`}></use>
      </svg>
      <input
        type="checkbox"
        checked={theme}
        className={css["switch-input"]}
        onChange={handleCheckboxChange}
      />
      <svg className={css["icon-sun"]} width="16" height="16">
        <use href={`${icons}#icon-sun`}></use>
      </svg>
    </label>
  );
};

export default ButtonTheme;
