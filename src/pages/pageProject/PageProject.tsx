import { useEffect, useState } from 'react';
import * as APIFirebase from '../../services/APIFirebase';
import { useTranslation } from 'react-i18next';
import SectionProject from '../../components/sectionProject/SectionProject';
import { useParams } from 'react-router-dom';
import { Project } from '../../interfaces';

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
  const { i18n, t } = useTranslation();
  const lng = i18n.resolvedLanguage as string;

  useEffect(() => {
    document.title = `${t('title.project')} - ${project.name} | ${t(
      'title.main'
    )}`;
  }, [project.name, t]);

  useEffect(() => {
    window.scrollTo(0, 0);

    (async () => {
      try {
        const project = await APIFirebase.getProject(lng, projectId!);
        setProject(project);
      } catch (error: any) {
        alert(error.message);
      }
    })();
  }, [lng, projectId]);

  return <SectionProject project={project} />;
};

export default PageProject;
