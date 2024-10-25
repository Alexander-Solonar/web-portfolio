import { FC } from 'react';
import FormikInput from './FormikInput';
import FormikTextarea from './FormikTextarea';

interface FormikControlProps {
  control: string;
  label: string;
  name: string;
  [x: string]: any;
}

const FormikControl: FC<FormikControlProps> = props => {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <FormikInput {...rest} />;
    case 'textarea':
      return <FormikTextarea {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
