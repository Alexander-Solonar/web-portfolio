import { useContext } from 'react';
import { Context } from '../../context/Context';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import BtnConnection from '../btnConnection/BtnConnection';
import image from '../../assets/images/hero-image.webp';
import scss from './SectionHero.module.scss';

const SectionHero = () => {
  const { theme } = useContext(Context);
  const { t } = useTranslation();

  return (
    <section className={clsx(scss.hero, theme && scss['hero-light'])}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss['box-desc']}>
            <h3 className={scss['sub-title']}>{t('hero.greetings')}</h3>
            <h1 className={scss.title}>{t('hero.name')}</h1>
            <p className={scss.text}>{t('hero.description')}</p>

            <BtnConnection />
          </div>
          <div className={scss.image}>
            <img
              src={image}
              alt="blue technology elements icon"
              width={900}
              height={599}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
