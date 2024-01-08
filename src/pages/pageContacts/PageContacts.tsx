import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionContacts from '../../components/sectionContacts';

const PageContacts = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('title.contacts');
    window.scrollTo(0, 0);
  }, [t]);

  return <SectionContacts />;
};

export default PageContacts;
