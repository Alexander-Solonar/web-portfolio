import Navigation from "../navigation/Navigation";
import { useContext } from "react";
import css from "./MobileMenu.module.css";

import clsx from "clsx";
import { Context } from "../../context/Context";

const MobileMenu = () => {
  const { theme } = useContext(Context);
  const { isOpenMenu } = useContext(Context);
  const { setIsOpenMenu } = useContext(Context);

  const handleClickCloseMenu = (e) => {
    if (e.target.nodeName === "A") setIsOpenMenu(false);
  };

  return (
    <div
      className={clsx(
        css.content,
        isOpenMenu && css["is-open"],
        theme && css["content-ligth"]
      )}
      onClick={handleClickCloseMenu}
    >
      <Navigation classNameList={"list-mobile-menu"} />
    </div>
  );
};

export default MobileMenu;
