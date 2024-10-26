import { FC } from 'react';
import { Field } from 'formik';

import scss from './Formik.module.scss';
import FormikError from './FormikError';

interface FormikTextareaProps {
  label: string;
  name: string;
  [x: string]: any;
}

const FormikTextarea: FC<FormikTextareaProps> = props => {
  const { label, name, ...rest } = props;
  return (
    <label className={scss['label']} htmlFor={name}>
      {label}
      <Field id={name} as="textarea" name={name} {...rest} />
      <FormikError name={name} />
    </label>
  );
};

export default FormikTextarea;
