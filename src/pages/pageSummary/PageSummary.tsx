import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionSummary from '../../components/sectionSummary';

const PageSummary = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t('title.summary');
  }, [t]);

  return <SectionSummary />;
};

export default PageSummary;
