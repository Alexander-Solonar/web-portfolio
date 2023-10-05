import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionSummary from '../../components/sectionSummary';

const PageSummary = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('title.summary');
    window.scrollTo(0, 0);
  }, [t]);

  return <SectionSummary />;
};

export default PageSummary;
