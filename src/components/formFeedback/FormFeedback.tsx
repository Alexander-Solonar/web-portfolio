import { FC, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { object, string } from 'yup';
import { useTranslation } from 'react-i18next';
import { SendMessageTg } from '../../services/SendMessageTg';
import { SendMessageEmail } from '../../services/SendMessageEmail';
import { FormFeedbackValues } from '../../interfaces';
import Notiflix from 'notiflix';
import scss from './FormFeedback.module.scss';

interface FormErrorProps {
  name: string;
}

const FormError: FC<FormErrorProps> = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <p className={scss.error}>{message}</p>}
    />
  );
};

let schema = object({
  name: string().trim().required('Name is a required field'),
  telegram: string().trim(),
  email: string().email().required('Email is a required field'),
  message: string().trim().required('Message is a required field'),
});

const FormFeedback = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const { t } = useTranslation();
  const notifySuccess = t('form.notify');

  const initialValues = {
    name: '',
    telegram: '',
    email: '',
    message: '',
  };

  const handleSubmit = async (
    values: FormFeedbackValues,
    actions: FormikHelpers<FormFeedbackValues>
  ) => {
    setButtonDisabled(true);
    actions.resetForm();
    Notiflix.Notify.success(notifySuccess);
    SendMessageEmail(values);
    SendMessageTg(values);
    setButtonDisabled(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={scss.form} autoComplete="off">
        <div className={scss.block}>
          <label className={scss.label}>
            {t('form.name')}
            <Field
              className={scss.input}
              type="text"
              name="name"
              placeholder={t('form.placeholderN')}
            />
            <FormError name="name" />
          </label>

          <label className={scss.label}>
            {t('form.telegram')}
            <Field
              className={scss.input}
              type="text"
              name="telegram"
              placeholder={t('form.placeholderT')}
            />
          </label>
        </div>

        <label className={scss.label}>
          {t('form.email')}
          <Field
            className={scss.input}
            type="email"
            name="email"
            placeholder={t('form.placeholderE')}
          />
          <FormError name="email" />
        </label>

        <label className={scss.label}>
          {t('form.message')}
          <Field
            className={scss.textarea}
            as="textarea"
            name="message"
            placeholder={t('form.placeholderM')}
          ></Field>
          <FormError name="message" />
        </label>

        <button
          className={scss.button}
          type="submit"
          disabled={isButtonDisabled}
        >
          {t('form.button')}
        </button>
      </Form>
    </Formik>
  );
};

export default FormFeedback;
