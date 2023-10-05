import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as APIFirebase from '../../services/APIFirebase';
import SectionGallery from '../../components/sectionGallery/SectionGallery';

const PagePortfolio = () => {
  const [projectsCollection, setProjectsCollection] = useState([]);
  const { i18n, t } = useTranslation();
  const lng = i18n.resolvedLanguage;

  useEffect(() => {
    document.title = t('title.gallery');
  }, [t]);

  useEffect(() => {
    window.scrollTo(0, 0);

    (async () => {
      try {
        const projects = await APIFirebase.getProjectsCollection(lng);
        setProjectsCollection(projects);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [lng]);

  return (
    <>
      <SectionGallery data={projectsCollection} />
    </>
  );
};

export default PagePortfolio;
