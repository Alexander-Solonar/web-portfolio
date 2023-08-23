import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import AppBar from "../aapBar/AppBar";
import Footer from "../footer/Footer";
import MobileMenu from "../mobileMenu";
import css from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={css.wrapper}>
      <header>
        <AppBar />
      </header>
      <main className={css.main}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <MobileMenu />
    </div>
  );
};

export default Layout;
