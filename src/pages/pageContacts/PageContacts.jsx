import { useEffect } from 'react';
import SectionContacts from '../../components/sectionContacts';

const PageContacts = () => {
  useEffect(() => {
    document.title = 'Portfolio | Contacts';
    window.scrollTo(0, 0);
  }, []);

  return <SectionContacts />;
};

export default PageContacts;
