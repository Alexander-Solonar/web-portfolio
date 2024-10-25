import { useTranslation } from 'react-i18next';
import cv from '../../assets/images/cv-image.webp';
import scss from './SectionSummary.module.scss';

const SectionSummary = () => {
  const { t } = useTranslation();

  return (
    <section className={scss['summary']}>
      <div className="container">
        <div className={scss.content}>
          <img className={scss.cv} src={cv} alt="" width={300} height={425} />

          <div className={scss.boxBtn}>
            <a
              className={scss.link}
              href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-c3ff0.appspot.com/o/sammury%2FOleksandr_Solonar_Front-end%20Developer.pdf?alt=media&token=689775c4-498b-4c2d-8d4d-1465f50dcf97"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {t('summary')} CV EN
            </a>
            <a
              className={scss.link}
              href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-c3ff0.appspot.com/o/sammury%2F%D0%A1%D0%BE%D0%BB%D0%BE%D0%BD%D0%B0%D1%80%20%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%20Front-end%20%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BD%D0%B8%D0%BA.pdf?alt=media&token=b045247c-fb9f-4099-bf5a-152ab38391d9"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {t('summary')} CV UA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSummary;
