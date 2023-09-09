import { useContext } from 'react';
import { Context } from '../../context/Context';
import clsx from 'clsx';
import BtnConnection from '../btnConnection/BtnConnection';
import image from '../../assets/images/hero-image.webp';
import scss from './SectionHero.module.scss';

const SectionHero = () => {
  const { theme } = useContext(Context);

  return (
    <section className={clsx(scss.hero, theme && scss['hero-light'])}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss['box-desc']}>
            <h3 className={scss['sub-title']}>Hi!</h3>
            <h1 className={scss.title}>I’m Oleksandr Solonar</h1>
            <p className={scss.text}>
              I'm a Front-end developer and this is my Portfolio site. I have
              been doing front-end development for over 1.5 years. I'm currently
              looking for a job. If you have an open vacancy please contact me.
            </p>

            <BtnConnection />
          </div>
          <div className={scss.image}>
            <img
              src={image}
              alt="blue technology elements icon"
              width={900}
              height={599}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
