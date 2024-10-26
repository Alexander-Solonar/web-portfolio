import { FC } from 'react';
import { SpriteIconProps } from '../../interfaces';
import sprite from '../../assets/icons/sprite.svg';

const SpriteIcon: FC<SpriteIconProps> = ({ width, height, icon }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#${icon}`} />
    </svg>
  );
};

export default SpriteIcon;
