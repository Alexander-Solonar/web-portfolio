import { Suspense, useContext } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../../context/Context";
import clsx from "clsx";
import AppBar from "../aapBar/AppBar";
import Footer from "../footer/Footer";
import MobileMenu from "../mobileMenu";
import css from "./Layout.module.css";

const Layout = () => {
  const { theme } = useContext(Context);

  return (
    <div className={css.wrapper}>
      <header>
        <AppBar />
      </header>
      <main className={clsx(css.main, theme && css["main-light"])}>
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
