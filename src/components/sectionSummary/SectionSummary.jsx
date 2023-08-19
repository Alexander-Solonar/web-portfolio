import { useContext } from "react";
import { Context } from "../../context/Context";
import clsx from "clsx";
import css from "./SectionSummary.module.css";
import cv from "../../assets/images/cv-image.jpg";
import res from "../../assets/Oleksandr_Solonar_Front-end Developer.pdf";

const SectionSummary = () => {
  const { theme } = useContext(Context);

  return (
    <section className={clsx(css.summary, theme && css["summary-light"])}>
      <div className="container">
        <div className={css.content}>
          <div className={css.cv}>
            <a
              href="https://cv.djinni.co/b7/8d3c92b0d67d97dfe34768fce39cca/Oleksandr_Solonar_Front-end_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img src={cv} alt="" width={350} height={495} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSummary;
