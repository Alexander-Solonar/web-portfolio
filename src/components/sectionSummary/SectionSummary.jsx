import { useContext } from 'react';
import { Context } from '../../context/Context';
import clsx from 'clsx';
import cv from '../../assets/images/cv-image.webp';
import scss from './SectionSummary.module.scss';

const SectionSummary = () => {
  const { theme } = useContext(Context);

  return (
    <section className={clsx(scss.summary, theme && scss['summary-light'])}>
      <div className="container">
        <div className={scss.content}>
          <img className={scss.cv} src={cv} alt="" width={300} height={425} />

          <div className={scss.boxBtn}>
            <a
              className={scss.link}
              href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-c3ff0.appspot.com/o/sammury%2FOleksandr_Solonar_Front-end%20Developer.pdf?alt=media&token=7c3285b2-0c4b-4c37-b859-68bcbe4dcf87"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Open CV EN
            </a>
            <a
              className={scss.link}
              href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-c3ff0.appspot.com/o/sammury%2F%D0%A1%D0%BE%D0%BB%D0%BE%D0%BD%D0%B0%D1%80%20%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%20Front-end%20%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BD%D0%B8%D0%BA.pdf?alt=media&token=66ca5ff6-9faa-4a58-8cc7-c6377f0640ba"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Open CV UA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSummary;
