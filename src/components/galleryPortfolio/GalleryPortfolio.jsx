import { useContext, useEffect, useState } from "react";
import * as APIFirebase from "../../services/APIFirebase";
import scss from "./GalleryPortfolio.module.scss";
import { Context } from "../../context/Context";
import clsx from "clsx";
import { Link } from "react-router-dom";

const GalleryPortfolio = () => {
  const { theme } = useContext(Context);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const projects = await APIFirebase.getSlidePortfolio();
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
          {collection.map(({ id, name, imgGallery, text }) => (
            <li key={id} className={scss.item}>
              <h3 className={scss.title}>{name}</h3>
              <Link className={scss.link} href="#">
                <div className={scss.image}>
                  <img
                    src={imgGallery}
                    alt={`${name} site preview`}
                    width={550}
                    height={370}
                  />
                </div>

                {/* <div className={scss.desc}>
                  <p className={scss.text}>{text.slice(0, 200) + "..."}</p>
                </div> */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GalleryPortfolio;
