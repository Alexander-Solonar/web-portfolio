import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import scss from './LangSwitchButton.module.scss';

const LangSwitchButton = () => {
  const { i18n } = useTranslation();
  const languages = ['ua', 'en'];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={scss['content']}>
      {languages.map(lang => (
        <button
          key={lang}
          className={clsx(
            scss['button'],
            i18n.language === lang && scss['active']
          )}
          onClick={() => changeLanguage(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LangSwitchButton;
