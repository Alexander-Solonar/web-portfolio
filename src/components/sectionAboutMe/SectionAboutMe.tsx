import { useContext } from 'react';
import { Context } from '../../context/Context';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import walk from '../../assets/images/walk.webp';
import scss from './SectionAboutMe.module.scss';

const animation = {
  hidden: {
    opacity: 0,
  },

  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const SectionAboutMe = () => {
  const { theme } = useContext(Context);
  const { t } = useTranslation();

  return (
    <section className={clsx(scss.aboutMe, theme && scss['aboutMe-light'])}>
      <div className={scss.content}>
        <div
          className={clsx(scss['box-desc'], theme && scss['box-desc-light'])}
        >
          <h2 className={scss.title}>{t('aboutMe.title')}</h2>
          <p className={clsx(scss.text, theme && scss['text-light'])}>
            {t('aboutMe.text')}
          </p>
        </div>
        <div className={scss['block-image']}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.7, once: true }}
            custom={1}
            variants={animation}
            className={clsx(scss.image, theme && scss['image-light'])}
          >
            <div className={scss['border-image']}>
              <img src={walk} alt="man" width={360} height={540} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutMe;
