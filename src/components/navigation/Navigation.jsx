import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import scss from './Navigation.module.scss';

const Navigation = ({ classNameList }) => {
  const { t } = useTranslation();

  const linkClassName = ({ isActive }) => {
    const className = isActive ? scss.active : scss.link;
    return className;
  };

  return (
    <nav className={scss.nav}>
      <ul className={scss[`${classNameList}`]}>
        <li>
          <NavLink className={linkClassName} to="/">
            {t('header.home')}
          </NavLink>
        </li>

        <li>
          <NavLink className={linkClassName} to="/gallery">
            {t('header.gallery')}
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/contacts">
            {t('header.contacts')}
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/summary">
            {t('header.summary')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

Navigation.propTypes = {
  classNameList: PropTypes.string.isRequired,
};
