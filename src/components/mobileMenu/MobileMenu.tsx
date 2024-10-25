import { MouseEvent, useContext } from 'react';
import { Context } from '../../context/Context';
import clsx from 'clsx';
import Navigation from '../navigation/Navigation';
import scss from './MobileMenu.module.scss';

const MobileMenu = () => {
  const { isOpenMenu, setIsOpenMenu } = useContext(Context);

  const handleClickCloseMenu = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).nodeName === 'A') setIsOpenMenu(false);
  };

  return (
    <div
      className={clsx(scss['content'], isOpenMenu && scss['is-open'])}
      onClick={handleClickCloseMenu}
    >
      <Navigation classNameList={'mobile-nav'} />
    </div>
  );
};

export default MobileMenu;
