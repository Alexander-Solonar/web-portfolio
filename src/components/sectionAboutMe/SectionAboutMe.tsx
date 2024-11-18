import { useTranslation } from 'react-i18next';
import walk from '../../assets/images/walk.webp';
import scss from './SectionAboutMe.module.scss';
import { motion } from 'framer-motion';
import { textAnimation } from '../../animation/animation';

const SectionAboutMe = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={scss['aboutMe']}
    >
      <div className="container">
        <div className={scss['content']}>
          <img src={walk} alt="man" width={320} />
          <div className={scss['box-desc']}>
            <h2 className={scss['title']}>{t('aboutMe.title')}</h2>
            <motion.p variants={textAnimation} className={scss['text']}>
              {t('aboutMe.text')}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SectionAboutMe;
