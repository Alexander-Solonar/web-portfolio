import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../../interfaces';
import * as APIFirebase from '../../services/APIFirebase';
import SectionProjects from '../../components/sectionProjects';
import Error from '../../components/error';

const PageProjects = () => {
  const [projectsCollection, setProjectsCollection] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { i18n } = useTranslation();
  const lng = i18n.resolvedLanguage as string;

  const fetchProjects = useCallback(async () => {
    try {
      const projects = await APIFirebase.getProjectsCollection(lng);
      setProjectsCollection(projects);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [lng]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = i18n.t('title.gallery');

    fetchProjects();
  }, [i18n, fetchProjects]);

  return (
    <>
      {!isLoading && (
        <>
          {error && <Error text={error} />}
          {!error && <SectionProjects data={projectsCollection} />}
        </>
      )}
    </>
  );
};

export default PageProjects;
