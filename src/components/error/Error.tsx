import { FC } from 'react';
import errorImg from '../../assets/images/error.webp';
import scss from './Error.module.scss';

interface ErrorProps {
  text: string | null;
}

const Error: FC<ErrorProps> = ({ text }) => {
  return (
    <div className="container">
      <div className={scss['content']}>
        <img src={errorImg} alt="emotions" />
        <p className={scss['text']}>{text}</p>
      </div>
    </div>
  );
};

export default Error;
