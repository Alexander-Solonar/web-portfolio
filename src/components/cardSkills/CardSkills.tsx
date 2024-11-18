import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Skill } from '../../interfaces';
import icons from '../../assets/icons/icons.svg';
import scss from './CardSkills.module.scss';

interface CardSkillsProps {
  skill: Skill;
}

const CardSkills = forwardRef<HTMLDivElement, CardSkillsProps>(({ skill }, ref) => {
  const { t } = useTranslation();
  const { tag, name, description } = skill;

  return (
    <div ref={ref} className={scss['card']}>
      <div className={scss['content']}>
        <div className={scss['content-front']}>
          <svg className={scss['icon']} width="76" height="75">
            <use href={`${icons}#icon-${tag}`} />
          </svg>
          <p className={scss['title']}>{name}</p>
        </div>
        <div className={scss['content-back']}>
          <p className={scss['text']}>{t(`${description}`)}</p>
        </div>
      </div>
    </div>
  );
});
const MCardSkills = motion.create(CardSkills);
export default MCardSkills;
