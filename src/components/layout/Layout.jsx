import { Suspense, useContext } from "react";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import AppBar from "../aapBar/AppBar";
import clsx from "clsx";
import MobileMenu from "../mobileMenu/MobileMenu";
import { Context } from "../../context/Context";

const Layout = () => {
  const { theme } = useContext(Context);

  return (
    <div className={css.wrapper}>
      <header className={clsx(css.header, theme && css["header-ligth"])}>
        <div className={css.container}>
          <AppBar />
        </div>
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
