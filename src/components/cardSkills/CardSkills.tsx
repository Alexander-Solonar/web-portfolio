import { FC } from 'react';
import { Skill } from '../../interfaces';
import icons from '../../assets/icons/icons.svg';
import scss from './CardSkills.module.scss';

interface CardSkillsProps {
  skill: Skill;
}

const CardSkills: FC<CardSkillsProps> = ({ skill }) => {
  const { tag, name, description } = skill;

  return (
    <div className={scss['card']}>
      <div className={scss['content']}>
        <div className={scss['content-front']}>
          <svg className={scss['icon']} width="76" height="75">
            <use href={`${icons}#icon-${tag}`} />
          </svg>
          <p className={scss['title']}>{name}</p>
        </div>
        <div className={scss['content-back']}>
          <p className={scss['text']}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSkills;
