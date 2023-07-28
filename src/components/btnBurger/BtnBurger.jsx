import { useContext } from "react";
import { Context } from "../../context/Context";
import clsx from "clsx";
import icons from "../../assets/icons/icons.svg";
import css from "./BtnBurger.module.css";

const BtnBurger = () => {
  const { theme } = useContext(Context);
  const { setIsOpenMenu } = useContext(Context);

  const handleClick = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  return (
    <button
      className={clsx(
        css["button-burger"],
        theme && css["button-burger-light"]
      )}
    >
      <svg width="50" height="34" onClick={handleClick}>
        <use href={`${icons}#icon-menu`} />
      </svg>
    </button>
  );
};

export default BtnBurger;
