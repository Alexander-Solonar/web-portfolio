import { MouseEvent, useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import clsx from 'clsx';
import Navigation from '../navigation/Navigation';
import scss from './MobileMenu.module.scss';
import { useClickOutside } from '../../hooks/useClickOutside';

const MobileMenu = () => {
  const { isOpenMenu, setIsOpenMenu } = useContext(Context);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    if (isOpenMenu) setTimeout(() => setIsOpenMenu(false), 100);
  });

  const handleClickCloseMenu = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).nodeName === 'A') setIsOpenMenu(false);
  };

  const getMobileMenuClass = clsx(scss['content'], isOpenMenu && scss['is-open']);

  return (
    <div className={getMobileMenuClass} onClick={handleClickCloseMenu} ref={menuRef}>
      <Navigation classNameList={'mobile-nav'} />
    </div>
  );
};

export default MobileMenu;
