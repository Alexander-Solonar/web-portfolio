import { Link } from 'react-router-dom';
import SpriteIcon from '../spriteIcon';
import scss from './Logo.module.scss';

const Logo = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link to="/" onClick={handleClick} className={scss['logo']}>
      <SpriteIcon width={180} height={60} icon="icon-logo" />
    </Link>
  );
};

export default Logo;
