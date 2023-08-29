import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import * as APIFirebase from "../../services/APIFirebase";
import arrowLeft from "../../assets/icons/icons.svg";
import arrowRight from "../../assets/icons/icons.svg";
import "swiper/css";
import scss from "./PortfolioSwiper.module.scss";

const PortfolioSwiper = () => {
  const { theme } = useContext(Context);
  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const projects = await APIFirebase.getSlidePortfolio();
        setMyProjects(projects);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  return (
    <Swiper
      speed={800}
      loop={true}
      modules={[Navigation]}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      className={`${scss.mySwiper}`}
    >
      {myProjects.map(({ id, name, image, text }) => (
        <SwiperSlide key={id}>
          <div className={clsx(scss.content, theme && scss["content-light"])}>
            <div>
              <img
                className={scss.image}
                src={image}
                alt={`${name} site preview`}
                width={500}
              />
            </div>

            <div className={scss.desc}>
              <h3 className={scss.title}>{name}</h3>
              <p className={scss.text}>{text.slice(0, 500) + "..."}</p>
              <Link className={scss.link}>More &#8594;</Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev">
        <svg width={36} height={36}>
          <use href={`${arrowLeft}#icon-arrow-left`} />
        </svg>
      </div>
      <div className="swiper-button-next">
        <svg width={36} height={36}>
          <use href={`${arrowRight}#icon-arrow-right`} />
        </svg>
      </div>
    </Swiper>
  );
};

export default PortfolioSwiper;
