import SectionAboutMe from '../../components/sectionAboutMe/SectionAboutMe';
import SectionHero from '../../components/sectionHero';
import SectionPortfolio from '../../components/sectionPortfolio';
import SectionSkills from '../../components/sectionSkills';

const PageHome = () => {
  return (
    <>
      <SectionHero />
      <SectionSkills />
      <SectionAboutMe />
      <SectionPortfolio />
    </>
  );
};

export default PageHome;
