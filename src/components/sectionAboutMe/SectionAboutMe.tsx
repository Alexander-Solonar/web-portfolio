import { useTranslation } from 'react-i18next';
import walk from '../../assets/images/walk.webp';
import scss from './SectionAboutMe.module.scss';

const SectionAboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className={scss['aboutMe']}>
      <div className="container">
        <div className={scss['content']}>
          <img src={walk} alt="man" width={320} />
          <div className={scss['box-desc']}>
            <h2 className={scss['title']}>{t('aboutMe.title')}</h2>
            <p className={scss['text']}>{t('aboutMe.text')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutMe;
