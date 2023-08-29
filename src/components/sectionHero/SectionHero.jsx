import { useContext } from "react";
import { Context } from "../../context/Context";
import clsx from "clsx";
import BtnConnection from "../btnConnection/BtnConnection";
import image from "../../assets/images/hero-image.png";
import scss from "./SectionHero.module.scss";

const SectionHero = () => {
  const { theme } = useContext(Context);

  return (
    <section className={clsx(scss.hero, theme && scss["hero-light"])}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss["box-desc"]}>
            <h3 className={scss["sub-title"]}>Hi!</h3>
            <h1 className={scss.title}>I’m Oleksandr Solonar</h1>
            <p className={scss.text}>
              I've been doing web design, front-end and back-end development for
              a year now. Do you need a website design, site layout, or maybe a
              turnkey website? Then contact me
            </p>

            <BtnConnection />
          </div>
          <div className={scss.image}>
            <img src={image} alt="#" width={980} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
