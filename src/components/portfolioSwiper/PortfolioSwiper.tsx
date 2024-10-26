import { FC, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCreative } from 'swiper/modules';
import { Project } from '../../interfaces';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import scss from './PortfolioSwiper.module.scss';

interface PortfolioSwiperProps {
  projects: Project[];
}

const SWIPER_SETTINGS = {
  speed: 800,
  loop: true,
  navigation: true,
  grabCursor: true,
  modules: [Navigation, EffectCreative],
  effect: 'creative',
  creativeEffect: {
    prev: { translate: [0, 0, -400] },
    next: { translate: ['100%', 0, 0] },
  },
};

const PortfolioSwiper: FC<PortfolioSwiperProps> = ({ projects }) => {
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
    <Swiper {...SWIPER_SETTINGS} className={`${scss.mySwiper}`}>
      {projects.map(({ id, name, image, text }) => (
        <SwiperSlide key={id}>
          <div className={scss['content']}>
            <img src={image} alt={`${name} site preview`} width={500} height={500} />
            <div className={scss['desc']}>
              <h3 className={scss['title']}>{name}</h3>
              <p className={scss['text']}>{text.slice(0, 400) + '...'}</p>
              <Link
                className={scss['link']}
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

export default PortfolioSwiper;
