import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import scss from './Navigation.module.scss';

interface NavigationProps {
  classNameList: string;
}

interface Active {
  isActive: boolean;
}

const Navigation: FC<NavigationProps> = ({ classNameList }) => {
  const { t } = useTranslation();

  const linkClassName = ({ isActive }: Active) => {
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
          <NavLink className={linkClassName} to="/projects">
            {t('header.projects')}
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
