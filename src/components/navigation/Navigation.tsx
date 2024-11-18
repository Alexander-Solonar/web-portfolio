import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { nameLink } from '../../data/navLink';
import clsx from 'clsx';
import scss from './Navigation.module.scss';

interface NavigationProps {
  classNameList: string;
}

const Navigation: FC<NavigationProps> = ({ classNameList }) => {
  const { t } = useTranslation();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(scss['link'], isActive && scss['active']);

  return (
    <nav className={scss['nav']}>
      <ul className={scss[`${classNameList}`]}>
        {nameLink.map(({ id, name, navigate }) => (
          <li key={id}>
            <NavLink className={linkClass} to={navigate}>
              {t(`${name}`)}
            </NavLink>
          </li>
        ))}
      </ul>
      <span></span>
    </nav>
  );
};

export default Navigation;
