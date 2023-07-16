import { Context } from "../../context/Context";
import { useContext } from "react";
import clsx from "clsx";
import css from "./Hero.module.css";

const Hero = () => {
  const { theme } = useContext(Context);

  return (
    <section className={clsx(css.hero, theme && css["hero-ligth"])}>
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
          </div>
          <div className={css.decoration}>
            <code className={css.code}>
              208 &lt; script&gt; <br /> 209 function myFunction()
              <br />
              210 &lt;/script&gt;
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
