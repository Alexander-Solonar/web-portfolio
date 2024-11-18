import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import MPrimeryButton from '../buttons/primeryButton';
import { btnAnimation, springAnimation } from '../../animation/animation';
import image from '../../assets/images/hero-image.webp';
import scss from './SectionHero.module.scss';

const SectionHero = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={scss['hero']}
    >
      <div className="container">
        <div className={scss['content']}>
          <div className={scss['box-desc']}>
            <h3 className={scss['sub-title']}>{t('hero.greetings')}</h3>
            <motion.h1 variants={springAnimation} className={scss['title']}>
              {t('hero.name')}
            </motion.h1>
            <p className={scss['text']}>{t('hero.description')}</p>
            <MPrimeryButton variants={btnAnimation} />
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
    </motion.section>
  );
};

export default SectionHero;
