import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import walk from '../../assets/images/walk.webp';
import scss from './SectionAboutMe.module.scss';

const SectionAboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const { t } = useTranslation();
  const fullText = t('aboutMe.text');
  const textRef = useRef(null);

  useEffect(() => {
    const targetElement = textRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let i = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, i));
      i += 1;

      if (i > fullText.length) {
        clearInterval(intervalId);
      }
    }, 8);

    return () => clearInterval(intervalId);
  }, [isVisible, fullText]);

  return (
    <section className={scss['aboutMe']}>
      <div className="container">
        <div className={scss['content']}>
          <img src={walk} alt="man" width={320} />
          <div className={scss['box-desc']}>
            <h2 className={scss['title']}>{t('aboutMe.title')}</h2>
            <p ref={textRef} className={scss['text']}>
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutMe;
