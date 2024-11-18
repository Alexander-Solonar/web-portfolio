import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../../interfaces';
import * as APIFirebase from '../../services/APIFirebase';
import SectionAboutMe from '../../components/sectionAboutMe/SectionAboutMe';
import SectionHero from '../../components/sectionHero';
import SectionPortfolio from '../../components/sectionPortfolio';
import SectionSkills from '../../components/sectionSkills';
import Notiflix from 'notiflix';

const PageHome = () => {
  const [projectsCollection, setProjectsCollection] = useState<Project[]>([]);
  const { i18n } = useTranslation();
  const lng = i18n.resolvedLanguage as string;

  const fetchData = useCallback(async () => {
    try {
      const projects = await APIFirebase.getProjectsCollection(lng);
      setProjectsCollection(projects);
    } catch (error: any) {
      Notiflix.Notify.failure(error.message);
    }
  }, [lng]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = i18n.t('title.main');
    fetchData();
  }, [i18n, fetchData]);

  return (
    <>
      <SectionHero />
      <SectionAboutMe />
      <SectionSkills />
      <SectionPortfolio data={projectsCollection} />
    </>
  );
};

export default PageHome;
