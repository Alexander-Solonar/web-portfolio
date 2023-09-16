import { useEffect } from 'react';
import SectionSummary from '../../components/sectionSummary';

const PageSummary = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <SectionSummary />;
};

export default PageSummary;
