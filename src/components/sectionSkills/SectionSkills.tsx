import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Skill } from '../../interfaces';
import CardSkills from '../cardSkills';
import scss from './SectionSkills.module.scss';

interface SectionSkillsProps {
  data: Skill[];
}

const SectionSkills: FC<SectionSkillsProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className={scss['skills']}>
      <div className="container">
        <div className={scss.content}>
          <h2 className={scss.title}>{t('skills.title')}</h2>
          <ul className={scss.list}>
            {data.map((element: Skill) => (
              <li key={element.id} className={scss.item}>
                <CardSkills skill={element} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;
