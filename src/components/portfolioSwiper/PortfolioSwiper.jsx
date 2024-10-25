import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import scss from './PortfolioSwiper.module.scss';
const PortfolioSwiper = ({ projects }) => {
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
      navigation={true}
      modules={[Navigation, EffectCreative]}
      grabCursor={true}
      effect={'creative'}
      creativeEffect={{
        prev: {
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      className={`${scss.mySwiper}`}
    >
      {projects.map(({ id, name, image, text }) => (
        <SwiperSlide key={id}>
          <div className={scss.content}>
            <img
              className={scss.image}
              src={image}
              alt={`${name} site preview`}
              width={500}
              height={500}
            />

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
