import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import CardSkills from '../cardSkills';
import scss from './SectionSkills.module.scss';

const SectionSkills = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className={scss['skills']}>
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
