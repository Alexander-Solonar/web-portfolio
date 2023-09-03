import { useContext, useEffect, useRef, useState } from "react";

import { Link, useLocation, useParams } from "react-router-dom";
import * as APIFirebase from "../../services/APIFirebase";
import scss from "./SectionProject.module.scss";
import { Context } from "../../context/Context";
import clsx from "clsx";
import icons from "../../assets/icons/icons.svg";

const SectionProject = () => {
  const { theme } = useContext(Context);
  const { projectId } = useParams();
  const [collection, setCollection] = useState({});

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

  useEffect(() => {
    (async () => {
      try {
        const project = await APIFirebase.getProject(projectId);
        setCollection(project);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [projectId]);

  return (
    <section className={clsx(scss.project, theme && scss["project-light"])}>
      <div className="container">
        <Link className={scss.backLink} to={backLinkHref.current}>
          <svg className={scss.icon} width={45} height={45}>
            <use href={`${icons}#icon-btnback`} />
          </svg>
        </Link>
        <div className={scss.content}>
          <img
            className={scss.image}
            src={collection.image}
            alt={`${collection.name} site preview`}
            width={500}
            height={500}
          />

          <div>
            <p className={scss.text}>{collection.text}</p>
            <div className={scss.blockLinks}>
              <a
                className={scss.link}
                href={collection.githubLink}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                gitHub
              </a>
              <a
                className={scss.link}
                href={collection.livePageLink}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                live Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProject;
