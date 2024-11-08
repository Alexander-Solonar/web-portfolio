import { FC, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Project } from '../../interfaces';
import SpriteIcon from '../spriteIcon';
import ExternalLinkButton from '../buttons/externalLinkButton';
import scss from './SectionProject.module.scss';

interface SectionProjectProps {
  project: Project;
}

const SectionProject: FC<SectionProjectProps> = ({ project }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/');
  const scrollPosition = useRef(location.state?.scrollPosition?.current || 0);

  const { image, name, text, githubLink, livePageLink } = project;

  const links = [
    { href: githubLink, text: 'gitHub' },
    { href: livePageLink, text: `${t('site')}` },
  ];

  return (
    <section className={scss['project']}>
      <div className="container">
        <Link
          className={scss['backLink']}
          to={backLinkHref.current}
          state={{ scroll: scrollPosition }}
        >
          <SpriteIcon width={45} height={45} icon={'icon-btnback'} />
        </Link>
        <div className={scss['content']}>
          <img src={image} alt={`${name} site preview`} width={500} height={500} />
          <div>
            <p className={scss['text']}>{text}</p>
            <div className={scss['blockLinks']}>
              {links.map((link, index) => (
                <ExternalLinkButton key={index} data={link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProject;
