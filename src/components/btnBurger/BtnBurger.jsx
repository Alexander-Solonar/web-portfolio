import { useContext } from "react";
import { Context } from "../../context/Context";
import icons from "../../assets/icons/icons.svg";
import scss from "./BtnBurger.module.scss";

const BtnBurger = () => {
  const { setIsOpenMenu } = useContext(Context);

  const handleClick = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  return (
    <button className={scss["button-burger"]}>
      <svg width="50" height="34" onClick={handleClick}>
        <use href={`${icons}#icon-menu`} />
      </svg>
    </button>
  );
};

export default BtnBurger;
