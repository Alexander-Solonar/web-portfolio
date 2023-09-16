import { useEffect, useState } from 'react';
import * as APIFirebase from '../../services/APIFirebase';
import SectionProject from '../../components/sectionProject/SectionProject';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PageProject = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);

    (async () => {
      try {
        const project = await APIFirebase.getProject(
          i18n.resolvedLanguage,
          projectId
        );
        setProject(project);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [i18n.resolvedLanguage, projectId]);

  return <SectionProject project={project} />;
};

export default PageProject;
