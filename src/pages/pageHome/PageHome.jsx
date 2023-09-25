import { useEffect, useState } from 'react';
import * as APIFirebase from '../../services/APIFirebase';
import SectionAboutMe from '../../components/sectionAboutMe/SectionAboutMe';
import SectionHero from '../../components/sectionHero';
import SectionPortfolio from '../../components/sectionPortfolio';
import SectionSkills from '../../components/sectionSkills';
import { useTranslation } from 'react-i18next';

const PageHome = () => {
  const [skillsCollection, setSkillsCollection] = useState([]);
  const [projectsCollection, setProjectsCollection] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    document.title = 'Portfolio | Home';
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const skills = await APIFirebase.getSkillsCollection(
          i18n.resolvedLanguage
        );
        const projects = await APIFirebase.getProjectsCollection(
          i18n.resolvedLanguage
        );
        setSkillsCollection(skills);
        setProjectsCollection(projects);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [i18n.resolvedLanguage]);

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
