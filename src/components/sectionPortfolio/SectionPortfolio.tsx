import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../../interfaces';
import PortfolioSwiper from '../portfolioSwiper';
import scss from './SectionPortfolio.module.scss';

interface SectionPortfolioProps {
  data: Project[];
}

const SectionPortfolio: FC<SectionPortfolioProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className={scss['portfolio']}>
      <div className="container">
        <div className={scss['content']}>
          <h2 className={scss['title']}>{t('portfolio.title')}</h2>
          <PortfolioSwiper projects={data} />
        </div>
      </div>
    </section>
  );
};

export default SectionPortfolio;
