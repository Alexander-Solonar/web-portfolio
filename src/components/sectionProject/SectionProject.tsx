import { FC, useContext, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Context } from '../../context/Context';
import { Project } from '../../interfaces';
import clsx from 'clsx';
import icons from '../../assets/icons/icons.svg';
import scss from './SectionProject.module.scss';

interface SectionProjectProps {
  project: Project;
}

const SectionProject: FC<SectionProjectProps> = ({ project }) => {
  const { theme } = useContext(Context);
  const { t } = useTranslation();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const scrollPosition = useRef(location.state?.scrollPosition?.current || 0);

  const { image, name, text, githubLink, livePageLink, tag } = project;

  return (
    <section className={clsx(scss.project, theme && scss['project-light'])}>
      <div className="container">
        <Link
          className={scss.backLink}
          to={backLinkHref.current}
          state={{ scroll: scrollPosition }}
        >
          <svg className={scss.icon} width={45} height={45}>
            <use href={`${icons}#icon-btnback`} />
          </svg>
        </Link>
        <div className={scss.content}>
          <img
            className={scss.image}
            src={image}
            alt={`${name} site preview`}
            width={500}
            height={500}
          />

          <div>
            <p className={scss.text}>{text}</p>
            <div className={scss.blockLinks}>
              <a
                className={scss.link}
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                gitHub
              </a>
              <a
                className={scss.link}
                href={livePageLink}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {t('site')} {tag}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProject;
