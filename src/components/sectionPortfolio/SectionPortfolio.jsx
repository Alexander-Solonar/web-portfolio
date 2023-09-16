import { useContext } from 'react';
import { Context } from '../../context/Context';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PortfolioSwiper from '../portfolioSwiper/';
import scss from './SectionPortfolio.module.scss';

const SectionPortfolio = ({ data }) => {
  const { theme } = useContext(Context);
  const { t } = useTranslation();

  return (
    <section className={clsx(scss.portfolio, theme && scss['portfolio-light'])}>
      <div className="container">
        <div className={scss.content}>
          <h2 className={scss.title}>{t('portfolio.title')}</h2>
          <PortfolioSwiper projects={data} />
        </div>
      </div>
    </section>
  );
};

SectionPortfolio.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SectionPortfolio;
