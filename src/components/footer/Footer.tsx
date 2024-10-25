import Navigation from '../navigation/Navigation';
import { useTranslation } from 'react-i18next';
import Logo from '../logo/Logo';
import ContactFooter from '../contactFooter/ContactFooter';
import scss from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={scss['footer']}>
      <div className="container">
        <div className={scss['content']}>
          <Navigation classNameList={'footer-nav'} />
          <ContactFooter />
          <div className={scss['block-copyright']}>
            <Logo />
            <p className={scss['text']}> {t('location')}</p>
            <p> &#169; 2023, Solonar Oleksandr</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
