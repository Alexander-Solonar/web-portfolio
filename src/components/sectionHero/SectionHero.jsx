import { useContext } from "react";
import { Context } from "../../context/Context";
import clsx from "clsx";
import BtnConnection from "../btnConnection/BtnConnection";
import image from "../../assets/images/hero-image.webp";
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
              I'm a front-end developer and this is my website "Portfolio" a
              year now. Do you need a website design, site layout, or maybe a
              turnkey website? Then contact me
            </p>

            <BtnConnection />
          </div>
          <div className={scss.image}>
            <img src={image} alt="#" width={900} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
