import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import scss from './BtnConnection.module.scss';

const BtnConnection = () => {
  const { t } = useTranslation();

  return (
    <Link className={scss.button} to="/contacts">
      {t('hero.button')}
    </Link>
  );
};

export default BtnConnection;
