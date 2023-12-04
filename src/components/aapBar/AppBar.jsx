import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
import throttle from 'lodash.throttle';
import clsx from 'clsx';
import Logo from '../logo';
import Navigation from '../navigation';
import BurgerButton from '../burgerButton';
import ThemeSwitchButton from '../themeSwitchButton';
import LangSwitchButton from '../langSwitchButton';
import scss from './AppBar.module.scss';

const AppBar = () => {
  const { theme, setIsOpenMenu } = useContext(Context);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 830) {
        setIsOpenMenu(false);
      }
    }, 250);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsOpenMenu]);

  return (
    <div className={clsx(scss['app-bar'], theme && scss['app-bar-light'])}>
      <div className="container">
        <div className={scss.content}>
          <Logo />
          <div className={scss.box}>
            {windowWidth > 830 && <Navigation classNameList={'list'} />}
            {windowWidth < 831 && <BurgerButton />}
            <LangSwitchButton />
            <ThemeSwitchButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
