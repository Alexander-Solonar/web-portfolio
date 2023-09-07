import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import Notiflix from "notiflix";
import scss from "./FormFeedback.module.scss";

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <p className={scss.error}>{message}</p>}
    />
  );
};

let schema = object({
  name: string().trim().required("Name is a required field"),
  telegram: string().trim(),
  email: string().email().required("Email is a required field"),
  message: string().trim().required("Message is a required field"),
});

const FormFeedback = () => {
  const initialValues = {
    name: "",
    telegram: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (values, actions) => {
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        Notiflix.Notify.success("Email sent successfully");
        actions.resetForm();
      }
    } catch (error) {
      Notiflix.Notify.failure(error.message);
    }
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
            Name
            <Field
              className={scss.input}
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <FormError name="name" />
          </label>

          <label className={scss.label}>
            Telegram
            <Field
              className={scss.input}
              type="text"
              name="telegram"
              placeholder="Enter your telegram"
            />
          </label>
        </div>

        <label className={scss.label}>
          Email
          <Field
            className={scss.input}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <FormError name="email" />
        </label>

        <label className={scss.label}>
          Message
          <Field
            className={scss.textarea}
            as="textarea"
            name="message"
            placeholder="Enter your message"
          ></Field>
          <FormError name="message" />
        </label>

        <button className={scss.button} type="submit">
          Send the message
        </button>
      </Form>
    </Formik>
  );
};

export default FormFeedback;