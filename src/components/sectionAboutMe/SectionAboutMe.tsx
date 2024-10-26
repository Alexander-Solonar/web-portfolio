import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import walk from '../../assets/images/walk.png';
import scss from './SectionAboutMe.module.scss';
import { useEffect, useState, useRef } from 'react';

const animation = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

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
    }, 10);

    return () => clearInterval(intervalId);
  }, [isVisible, fullText]);

  return (
    <section className={scss['aboutMe']}>
      <div className="container">
        <div className={scss['content']}>
          <div className={scss['box-desc']}>
            <h2 className={scss['title']}>{t('aboutMe.title')}</h2>
            <p ref={textRef} className={scss['text']}>
              {text}
            </p>
          </div>
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              custom={1}
              variants={animation}
            >
              <img src={walk} alt="man" width={320} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutMe;
