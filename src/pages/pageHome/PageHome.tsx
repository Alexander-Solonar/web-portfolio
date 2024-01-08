import { useEffect, useState } from 'react';
import * as APIFirebase from '../../services/APIFirebase';
import { useTranslation } from 'react-i18next';
import SectionAboutMe from '../../components/sectionAboutMe/SectionAboutMe';
import SectionHero from '../../components/sectionHero';
import SectionPortfolio from '../../components/sectionPortfolio';
import SectionSkills from '../../components/sectionSkills';
import { Project, Skill } from '../../interfaces';

const PageHome = () => {
  const [skillsCollection, setSkillsCollection] = useState<Skill[]>([]);
  const [projectsCollection, setProjectsCollection] = useState<Project[]>([]);
  const { i18n, t } = useTranslation();
  const lng = i18n.resolvedLanguage as string;

  useEffect(() => {
    document.title = t('title.main');
  }, [t]);

  useEffect(() => {
    (async () => {
      try {
        const skills = await APIFirebase.getSkillsCollection(lng);
        setSkillsCollection(skills);
        const projects = await APIFirebase.getProjectsCollection(lng);
        setProjectsCollection(projects);
      } catch (error: any) {
        alert(error.message);
      }
    })();
  }, [lng]);

  return (
    <>
      <SectionHero />
      <SectionSkills data={skillsCollection} />
      <SectionAboutMe />
      <SectionPortfolio data={projectsCollection} />
    </>
  );
};

export default PageHome;
