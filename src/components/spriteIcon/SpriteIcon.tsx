import { FC } from 'react';
import sprite from '../../assets/icons/sprite.svg';

interface SpriteIconProps {
  width: number;
  height: number;
  icon: string;
}

const SpriteIcon: FC<SpriteIconProps> = ({ width, height, icon }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#${icon}`} />
    </svg>
  );
};

export default SpriteIcon;
