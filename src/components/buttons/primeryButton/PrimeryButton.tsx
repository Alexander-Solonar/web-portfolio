import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import scss from './PrimeryButton.module.scss';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const PrimeryButton = forwardRef<HTMLAnchorElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <Link ref={ref} className={scss['button']} to="/contacts">
      <span className={scss['text']}>{t('hero.button')}</span>
    </Link>
  );
});

const MPrimeryButton = motion.create(PrimeryButton);
export default MPrimeryButton;
