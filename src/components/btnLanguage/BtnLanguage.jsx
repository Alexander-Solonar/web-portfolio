import React from 'react';
import { useTranslation } from 'react-i18next';
import scss from './BtnLanguage.module.scss';
import clsx from 'clsx';

const BtnLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={scss.content}>
      <button
        className={clsx(
          scss.button,
          i18n.resolvedLanguage === 'ua' && scss.active
        )}
        onClick={() => changeLanguage('ua')}
      >
        UA
      </button>
      <span className={scss.slash}>/</span>
      <button
        className={clsx(
          scss.button,
          i18n.resolvedLanguage === 'en' && scss.active
        )}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default BtnLanguage;
