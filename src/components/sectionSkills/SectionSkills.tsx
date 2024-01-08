import { FC, useContext } from 'react';
import { Context } from '../../context/Context';
import { useTranslation } from 'react-i18next';
import { Skill } from '../../interfaces';
import clsx from 'clsx';
import CardSkills from '../cardSkills';
import scss from './SectionSkills.module.scss';

interface SectionSkillsProps {
  data: Skill[];
}

const SectionSkills: FC<SectionSkillsProps> = ({ data }) => {
  const { theme } = useContext(Context);
  const { t } = useTranslation();

  return (
    <section className={clsx(scss.skills, theme && scss['skills-light'])}>
      <div className="container">
        <div className={scss.content}>
          <h2 className={scss.title}>{t('skills.title')}</h2>
          <ul className={scss.list}>
            {data.map(element => (
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
