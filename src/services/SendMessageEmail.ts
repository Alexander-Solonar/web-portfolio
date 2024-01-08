import Notiflix from 'notiflix';

const URL_API = 'https://my-portfolio-gytx.onrender.com/send-email';

interface Values {
  name: string;
  telegram: string;
  email: string;
  message: string;
}

export const SendMessageEmail = async (values: Values) => {
  console.log(values);
  try {
    await fetch(URL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
  } catch (error: any) {
    Notiflix.Notify.failure(error.message);
  }
};
