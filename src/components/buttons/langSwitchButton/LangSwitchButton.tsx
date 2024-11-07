import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import scss from './LangSwitchButton.module.scss';

const LangSwitchButton = () => {
  const { i18n } = useTranslation();
  const languages = ['ua', 'en'];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const getLangSwitchBtnClass = (lang: string) =>
    clsx(scss['button'], i18n.language === lang && scss['active']);

  return (
    <div className={scss['content']}>
      {languages.map((lang, index) => (
        <div className={scss['block-buttons']} key={lang}>
          <button
            className={getLangSwitchBtnClass(lang)}
            onClick={() => changeLanguage(lang)}
          >
            {lang.toUpperCase()}
          </button>
          {index % 2 === 0 && <span className={scss['slash']}>/</span>}
        </div>
      ))}
    </div>
  );
};

export default LangSwitchButton;
