import { useContext } from "react";
import { Context } from "../../context/Context";
import clsx from "clsx";
import css from "./SectionSummary.module.css";
import cv from "../../assets/images/cv-image.jpg";

const SectionSummary = () => {
  const { theme } = useContext(Context);

  return (
    <section className={clsx(css.summary, theme && css["summary-light"])}>
      <div className="container">
        <div className={css.content}>
          <ul className={css.list}>
            <li className={css.item}>
              <h2 className={css.title}>CV in English</h2>
              <a
                className={css.cv}
                href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-c3ff0.appspot.com/o/sammury%2FOleksandr_Solonar_Front-end%20Developer.pdf?alt=media&token=5beb269e-f971-4564-b89b-0edfc2c94606"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img src={cv} alt="" width={285} height={403} />
              </a>
              <a
                className={css.link}
                href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-c3ff0.appspot.com/o/sammury%2FOleksandr_Solonar_Front-end%20Developer.pdf?alt=media&token=5beb269e-f971-4564-b89b-0edfc2c94606"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Open CV
              </a>
            </li>
            <li className={css.item}>
              <h2 className={css.title}>CV in Ukrainian</h2>
              <a
                className={css.cv}
                href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-c3ff0.appspot.com/o/sammury%2F%D0%A1%D0%BE%D0%BB%D0%BE%D0%BD%D0%B0%D1%80%20%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-Front-end%20Developer%20.pdf?alt=media&token=a7529704-7ea5-4814-b439-5bce20f21c55"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img src={cv} alt="" width={285} height={403} />
              </a>
              <a
                className={css.link}
                href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-c3ff0.appspot.com/o/sammury%2F%D0%A1%D0%BE%D0%BB%D0%BE%D0%BD%D0%B0%D1%80%20%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-Front-end%20Developer%20.pdf?alt=media&token=a7529704-7ea5-4814-b439-5bce20f21c55"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Open CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionSummary;
