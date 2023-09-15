import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
import throttle from 'lodash.throttle';
import clsx from 'clsx';
import Logo from '../logo';
import Navigation from '../navigation';
import BtnBurger from '../btnBurger';
import BtnTheme from '../btnTheme';
import BtnLanguage from '../btnLanguage';
import scss from './AppBar.module.scss';

const AppBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { theme } = useContext(Context);
  const { setIsOpenMenu } = useContext(Context);

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
            {windowWidth < 831 && <BtnBurger />}
            <BtnLanguage />
            <BtnTheme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
