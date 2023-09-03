import { useContext, useEffect, useState } from "react";
import * as APIFirebase from "../../services/APIFirebase";
import scss from "./SectionGallery.module.scss";
import { Context } from "../../context/Context";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

const SectionGallery = () => {
  const { theme } = useContext(Context);
  const [collection, setCollection] = useState([]);

  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const projects = await APIFirebase.getProjectsCollection();
        setCollection(projects);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  return (
    <section className={clsx(scss.gallery, theme && scss["gallery-light"])}>
      <div className="container">
        <ul className={scss.list}>
          {collection.map(({ id, name, imgGallery }) => (
            <li key={id} className={scss.item}>
              <h3 className={scss.title}>{name}</h3>

              <Link
                to={`/gallery/project/${id}`}
                className={scss.link}
                state={{ from: location }}
              >
                <img
                  className={scss.image}
                  src={imgGallery}
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

export default SectionGallery;
