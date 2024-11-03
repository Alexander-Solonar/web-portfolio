import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, FormikHelpers } from 'formik';
import { schema } from '../formik/schemas';
import { SendMessageTg } from '../../services/SendMessageTg';
import { FormFeedbackValues } from '../../interfaces';
import FormikControl from '../formik/FormikControl';
import Notiflix from 'notiflix';
import scss from './FormFeedback.module.scss';

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
          <FormikControl
            className={scss.input}
            control="input"
            type="text"
            name="name"
            label={t('form.name')}
            placeholder={t('form.placeholderN')}
          />
          <FormikControl
            className={scss.input}
            control="input"
            type="text"
            name="telegram"
            label={t('form.telegram')}
            placeholder={t('form.placeholderT')}
          />
        </div>
        <FormikControl
          className={scss.input}
          control="input"
          type="email"
          name="email"
          label={t('form.email')}
          placeholder={t('form.placeholderE')}
        />
        <FormikControl
          className={scss.textarea}
          control="textarea"
          name="message"
          label={t('form.message')}
          placeholder={t('form.placeholderM')}
        />
        <button className={scss.button} type="submit" disabled={isButtonDisabled}>
          {t('form.button')}
        </button>
      </Form>
    </Formik>
  );
};

export default FormFeedback;
