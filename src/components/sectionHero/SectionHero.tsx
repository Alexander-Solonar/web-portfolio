import { useTranslation } from 'react-i18next';
import PrimeryButton from '../buttons/primeryButton';
import image from '../../assets/images/hero-image.webp';
import scss from './SectionHero.module.scss';

const SectionHero = () => {
  const { t } = useTranslation();

  return (
    <section className={scss['hero']}>
      <div className="container">
        <div className={scss['content']}>
          <div className={scss['box-desc']}>
            <h3 className={scss['sub-title']}>{t('hero.greetings')}</h3>
            <h1 className={scss['title']}>{t('hero.name')}</h1>
            <p className={scss['text']}>{t('hero.description')}</p>

            <PrimeryButton />
          </div>
          <div className={scss['image']}>
            <img
              src={image}
              alt="blue technology elements icon"
              width={600}
              height={605}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
