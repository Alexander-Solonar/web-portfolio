import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../aapBar/AppBar';
import Footer from '../footer/Footer';
import MobileMenu from '../mobileMenu';
import Loader from 'components/loader';
import scss from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={scss.wrapper}>
      <header>
        <AppBar />
      </header>
      <main className={scss.main}>
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
