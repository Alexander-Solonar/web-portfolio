import { useEffect } from 'react';
import SectionContacts from '../../components/sectionContacts';

const PageContacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <SectionContacts />;
};

export default PageContacts;
