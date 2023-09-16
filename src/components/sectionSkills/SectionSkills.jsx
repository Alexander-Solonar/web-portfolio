import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context/Context';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import CardSkills from '../cardSkills';
import scss from './SectionSkills.module.scss';

const SectionSkills = ({ data }) => {
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

SectionSkills.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SectionSkills;
