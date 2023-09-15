import { Suspense, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import AppBar from '../aapBar/AppBar';
import Footer from '../footer/Footer';
import MobileMenu from '../mobileMenu';
import Loader from 'components/loader';
import scss from './Layout.module.scss';
import { Context } from 'context/Context';

const Layout = () => {
  const { theme } = useContext(Context);

  return (
    <div className={scss.wrapper}>
      <header>
        <AppBar />
      </header>
      <main className={clsx(scss.main, theme && scss['main-light'])}>
        <Suspense className={scss.suspense} fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <MobileMenu />
    </div>
  );
};

export default Layout;
