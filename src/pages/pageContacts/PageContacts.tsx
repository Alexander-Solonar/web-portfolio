import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionContacts from '../../components/sectionContacts';

const PageContacts = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t('title.contacts');
  }, [t]);

  return <SectionContacts />;
};

export default PageContacts;
