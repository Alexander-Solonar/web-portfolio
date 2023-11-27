import { useContext, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from '../../context/Context';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import clsx from 'clsx';
import arrowLeft from '../../assets/icons/icons.svg';
import arrowRight from '../../assets/icons/icons.svg';
import scss from './PortfolioSwiper.module.scss';

const PortfolioSwiper = ({ projects }) => {
  const { theme } = useContext(Context);
  const scrollPositionRef = useRef(0);
  const location = useLocation();
  const saveScroll = location?.state?.scroll?.current || 0;

  const handleScroll = () => {
    scrollPositionRef.current = window.scrollY;
  };

  useEffect(() => {
    window.scrollTo(0, saveScroll);
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [saveScroll]);

  return (
    <Swiper
      speed={800}
      loop={true}
      modules={[Navigation]}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      className={`${scss.mySwiper}`}
    >
      {projects.map(({ id, name, image, text }) => (
        <SwiperSlide key={id}>
          <div className={clsx(scss.content, theme && scss['content-light'])}>
            <div>
              <img
                className={scss.image}
                src={image}
                alt={`${name} site preview`}
                width={500}
                height={500}
              />
            </div>

            <div className={scss.desc}>
              <h3 className={scss.title}>{name}</h3>
              <p className={scss.text}>{text.slice(0, 400) + '...'}</p>
              <Link
                className={scss.link}
                to={`/projects/project/${id}`}
                state={{
                  from: location,
                  scrollPosition: scrollPositionRef,
                }}
              >
                More &#8594;
              </Link>
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

PortfolioSwiper.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PortfolioSwiper;
