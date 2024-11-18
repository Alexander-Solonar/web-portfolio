import { useTranslation } from 'react-i18next';
import { skillsCollection } from '../../data/cardsSkill';
import { Skill } from '../../interfaces';
import { motion } from 'framer-motion';
import { cardAnimation } from '../../animation/animation';
import MCardSkills from '../cardSkills';
import scss from './SectionSkills.module.scss';

const SectionSkills = () => {
  const { t } = useTranslation();

  return (
    <section className={scss['skills']}>
      <div className="container">
        <div className={scss['content']}>
          <h2 className={scss['title']}>{t('skills.title')}</h2>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={scss['list']}
          >
            {skillsCollection.map((element: Skill) => (
              <li key={element.id} className={scss['item']}>
                <MCardSkills
                  custom={element.id}
                  variants={cardAnimation}
                  skill={element}
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;
