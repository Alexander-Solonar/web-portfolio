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
      {languages.map(lang => (
        <button
          key={lang}
          className={getLangSwitchBtnClass(lang)}
          onClick={() => changeLanguage(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LangSwitchButton;
