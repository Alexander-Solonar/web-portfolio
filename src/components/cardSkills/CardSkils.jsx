import icons from "../../assets/icons/icons.svg";
import clsx from "clsx";
import css from "./CardSkils.module.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

const CardSkils = ({ data }) => {
  const { theme } = useContext(Context);
  const { tag, name, description } = data;

  return (
    <div className={css.card}>
      <div className={clsx(css.content, theme && css["content-light"])}>
        <div className={css["content-front"]}>
          <svg className={css.icon} width="76" height="75">
            <use href={`${icons}#icon-${tag}`} />
          </svg>
          <p className={css.title}>{name}</p>
        </div>
        <div className={css["content-back"]}>
          <p className={css.text}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSkils;
