import { FC } from 'react';
import { ErrorMessage } from 'formik';
import scss from './Formik.module.scss';

interface FormErrorProps {
  name: string;
}

const FormikError: FC<FormErrorProps> = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <p className={scss.error}>{message}</p>}
    />
  );
};

export default FormikError;
