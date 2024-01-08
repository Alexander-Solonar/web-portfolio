import { ChangeEvent, useContext } from 'react';
import { Context } from '../../context/Context';
import icons from '../../assets/icons/icons.svg';
import scss from './ThemeSwitchButton.module.scss';

const ThemeSwitchButton = () => {
  const { setTheme } = useContext(Context);
  const { theme } = useContext(Context);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked);
  };

  return (
    <label className={scss.switch}>
      <svg className={scss['icon-moon']} width="16" height="16">
        <use href={`${icons}#icon-moon`}></use>
      </svg>
      <input
        type="checkbox"
        checked={theme}
        className={scss['switch-input']}
        onChange={handleCheckboxChange}
      />
      <svg className={scss['icon-sun']} width="16" height="16">
        <use href={`${icons}#icon-sun`}></use>
      </svg>
    </label>
  );
};

export default ThemeSwitchButton;
