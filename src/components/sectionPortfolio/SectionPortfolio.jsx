import { useContext } from "react";
import { Context } from "../../context/Context";
import clsx from "clsx";
import PortfolioSwiper from "../portfolioSwiper/";
import css from "./SectionPortfolio.module.css";

const SectionPortfolio = () => {
  const { theme } = useContext(Context);

  return (
    <div className={clsx(css.portfolio, theme && css["portfolio-light"])}>
      <div className="container">
        <h2 className={css.title}>Portfolio</h2>
        <PortfolioSwiper />
      </div>
    </div>
  );
};

export default SectionPortfolio;
