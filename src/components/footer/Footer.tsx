import { useContext } from 'react';
import { Context } from '../../context/Context';
import Navigation from '../navigation/Navigation';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Logo from '../logo/Logo';
import ContactFooter from '../contactFooter/ContactFooter';
import scss from './Footer.module.scss';

const Footer = () => {
  const { theme } = useContext(Context);
  const { t } = useTranslation();

  return (
    <footer className={clsx(scss.footer, theme && scss['footer-light'])}>
      <div className="container">
        <div className={scss.content}>
          <Navigation classNameList={'list-footer'} />
          <ContactFooter />
          <div className={scss['block-copyright']}>
            <Logo />
            <p className={scss.text}> {t('location')}</p>
            <p> &#169; 2023, Solonar Oleksandr</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
