import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as APIFirebase from '../../services/APIFirebase';
import SectionProjects from '../../components/sectionProjects';
import { Project } from '../../interfaces';

const PageProjects = () => {
  const [projectsCollection, setProjectsCollection] = useState<Project[]>([]);
  const { i18n, t } = useTranslation();
  const lng = i18n.resolvedLanguage as string;

  useEffect(() => {
    document.title = t('title.gallery');
  }, [t]);

  useEffect(() => {
    window.scrollTo(0, 0);

    (async () => {
      try {
        const projects = await APIFirebase.getProjectsCollection(lng);
        setProjectsCollection(projects);
      } catch (error: any) {
        alert(error.message);
      }
    })();
  }, [lng]);

  return (
    <>
      <SectionProjects data={projectsCollection} />
    </>
  );
};

export default PageProjects;
