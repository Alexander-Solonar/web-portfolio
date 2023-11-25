import { useContext } from 'react';
import { Context } from '../../context/Context';
import clsx from 'clsx';
import icons from '../../assets/icons/icons.svg';
import scss from './BtnBurger.module.scss';

const BtnBurger = () => {
  const { isOpenMenu, setIsOpenMenu } = useContext(Context);

  const handleClick = () => {
    setIsOpenMenu(prevState => !prevState);
  };

  return (
    <button
      className={clsx(scss['burger-btn'], isOpenMenu && scss['open-menu'])}
    >
      <svg width="50" height="34" onClick={handleClick}>
        <use href={`${icons}#icon-menu`} />
      </svg>
    </button>
  );
};

export default BtnBurger;
