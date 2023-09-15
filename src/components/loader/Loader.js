import { Oval } from 'react-loader-spinner';
import scss from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={scss.loader}>
      <Oval
        height={40}
        width={40}
        color="#00c4f0"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#00c4f0"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  );
};

export default Loader;
