import { Context } from "../../context/Context";
import { useContext } from "react";
import clsx from "clsx";
import BtnConnection from "../btnConnection/BtnConnection";
import image from "../../assets/images/hero-image.png";
import css from "./SectionHero.module.css";

const SectionHero = () => {
  const { theme } = useContext(Context);

  return (
    <section className={clsx(css.hero, theme && css["hero-light"])}>
      <div className="container">
        <div className={css.content}>
          <div className={css["box-desc"]}>
            <h3 className={css["sub-title"]}>Hello</h3>
            <h1 className={css.title}>I’m Oleksandr Solonar</h1>
            <p className={css.text}>
              I've been doing web design, front-end and back-end development for
              a year now. Do you need a website design, site layout, or maybe a
              turnkey website? Then contact me
            </p>
            <BtnConnection />
          </div>
          <div className={css.decoration}>
            <div className={css.image}>
              <img src={image} alt="#" width={320} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
