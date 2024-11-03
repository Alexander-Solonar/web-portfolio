import { useCallback, useEffect, useState } from 'react';
import * as APIFirebase from '../../services/APIFirebase';
import { useTranslation } from 'react-i18next';
import SectionProject from '../../components/sectionProject/SectionProject';
import { useParams } from 'react-router-dom';
import { Project } from '../../interfaces';
import Error from '../../components/error';

const initialProject: Project = {
  githubLink: '',
  id: '',
  image: '',
  imgProject: '',
  livePageLink: '',
  name: '',
  tag: '',
  text: '',
};

const PageProject = () => {
  const { projectId } = useParams<{ projectId?: string }>();
  const [project, setProject] = useState<Project>(initialProject);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { i18n } = useTranslation();
  const lng = i18n.resolvedLanguage as string;

  const fetchProject = useCallback(async () => {
    try {
      const project = await APIFirebase.getProject(lng, projectId!);
      setProject(project);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [lng, projectId]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${project.name} | ${i18n.t('title.main')}`;

    fetchProject();
  }, [project.name, i18n, fetchProject]);

  return (
    <>
      {!isLoading && (
        <>
          {error && <Error text={error} />}
          {!error && <SectionProject project={project} />}
        </>
      )}
    </>
  );
};

export default PageProject;
