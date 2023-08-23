import { useContext } from "react";
import { Context } from "../../context/Context";
import clsx from "clsx";
import Navigation from "../navigation/Navigation";
import css from "./MobileMenu.module.scss";

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
        theme && css["content-light"]
      )}
      onClick={handleClickCloseMenu}
    >
      <Navigation classNameList={"list-mobile-menu"} />
    </div>
  );
};

export default MobileMenu;
