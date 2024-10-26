import { Field } from 'formik';
import scss from './Formik.module.scss';
import { FC } from 'react';
import FormikError from './FormikError';

interface FormikInputProps {
  label: string;
  name: string;
  [x: string]: any;
}

const FormikInput: FC<FormikInputProps> = ({ label, name, ...rest }) => {
  return (
    <label className={scss['label']} htmlFor={name}>
      {label}
      <Field id={name} name={name} {...rest} />
      <FormikError name={name} />
    </label>
  );
};

export default FormikInput;
