import { useEffect, useState } from 'react';
import * as APIFirebase from '../../services/APIFirebase';
import SectionGallery from '../../components/sectionGallery/SectionGallery';
import { useTranslation } from 'react-i18next';

const PagePortfolio = () => {
  const [projectsCollection, setProjectsCollection] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);

    (async () => {
      try {
        const projects = await APIFirebase.getProjectsCollection(
          i18n.resolvedLanguage
        );
        setProjectsCollection(projects);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [i18n.resolvedLanguage]);

  return (
    <>
      <SectionGallery data={projectsCollection} />
    </>
  );
};

export default PagePortfolio;
