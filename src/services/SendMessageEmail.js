import Notiflix from 'notiflix';

const URL_API = 'https://my-portfolio-gytx.onrender.com/send-email';

export const SendMessageEmail = async values => {
  try {
    await fetch(URL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
};
