import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../aapBar/AppBar";
import MobileMenu from "../mobileMenu";
import css from "./Layout.module.css";

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
      <footer></footer>
      <MobileMenu />
    </div>
  );
};

export default Layout;
