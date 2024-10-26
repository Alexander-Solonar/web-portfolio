import { useContext } from 'react';
import { Context } from '../../context/Context';
import clsx from 'clsx';
import SpriteIcon from '../spriteIcon';
import scss from './BurgerButton.module.scss';

const BurgerButton = () => {
  const { isOpenMenu, setIsOpenMenu } = useContext(Context);

  const handleClick = () => {
    setIsOpenMenu(prevState => !prevState);
  };

  const getBurgerBtnClass = clsx(scss['burger-btn'], isOpenMenu && scss['open-menu']);

  return (
    <button className={getBurgerBtnClass} onClick={handleClick}>
      <SpriteIcon width={50} height={34} icon={'icon-menu'} />
    </button>
  );
};

export default BurgerButton;
