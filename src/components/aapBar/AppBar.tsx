import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
import throttle from 'lodash.throttle';
import Logo from '../logo';
import Navigation from '../navigation';
import BurgerButton from '../burgerButton';
import LangSwitchButton from '../langSwitchButton';
import scss from './AppBar.module.scss';

const AppBar = () => {
  const { setIsOpenMenu } = useContext(Context);
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
    <header className={scss['app-bar']}>
      <div className="container">
        <div className={scss['content']}>
          <Logo />
          <div className={scss['box']}>
            {windowWidth > 830 && <Navigation classNameList="desktop-nav" />}
            <LangSwitchButton />
            {windowWidth < 831 && <BurgerButton />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
