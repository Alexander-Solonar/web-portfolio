import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import scss from './Navigation.module.scss';

const nameLink = [
  { id: 1, name: 'nav.home', navigate: '/' },
  { id: 2, name: 'nav.projects', navigate: '/projects' },
  { id: 3, name: 'nav.contacts', navigate: '/contacts' },
  { id: 4, name: 'nav.summary', navigate: '/summary' },
];

interface NavigationProps {
  classNameList: string;
}

const Navigation: FC<NavigationProps> = ({ classNameList }) => {
  const { t } = useTranslation();

  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? scss['active'] : scss['link'];

  return (
    <nav className={scss['nav']}>
      <ul className={scss[`${classNameList}`]}>
        {nameLink.map(({ id, name, navigate }) => (
          <li key={id}>
            <NavLink className={linkClassName} to={navigate}>
              {t(`${name}`)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
