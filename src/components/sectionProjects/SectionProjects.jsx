import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';
import clsx from 'clsx';
import scss from './SectionProjects.module.scss';

const SectionProjects = ({ data }) => {
  const { theme } = useContext(Context);
  const location = useLocation();

  return (
    <section className={clsx(scss.projects, theme && scss['projects-light'])}>
      <div className="container">
        <ul className={scss.list}>
          {data.map(({ id, name, imgProject }) => (
            <li key={id} className={scss.item}>
              <h3 className={scss.title}>{name}</h3>

              <Link
                to={`/projects/project/${id}`}
                className={scss.link}
                state={{ from: location }}
              >
                <img
                  className={scss.image}
                  src={imgProject}
                  alt={`${name} site preview`}
                  width={550}
                  height={370}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionProjects;
