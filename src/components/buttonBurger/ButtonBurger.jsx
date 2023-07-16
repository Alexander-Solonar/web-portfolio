import icons from "../../assets/icons/icons.svg";
import { useContext } from "react";
import clsx from "clsx";

import css from "./ButtonBurger.module.css";
import { Context } from "../../context/Context";

const ButtonBurger = () => {
  const { theme } = useContext(Context);
  const { setIsOpenMenu } = useContext(Context);

  const handleClick = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  return (
    <button
      className={clsx(
        css["button-burger"],
        theme && css["button-burger-ligth"]
      )}
    >
      <svg width="38" height="38" onClick={handleClick}>
        <use href={`${icons}#icon-menu`} />
      </svg>
    </button>
  );
};

export default ButtonBurger;
