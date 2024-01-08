import axios from 'axios';
import Notiflix from 'notiflix';

const TOKEN = '6758528711:AAEjayHvFKVDXyoLE5L4pwWbUVTF134hlSI';
const CHAT_ID = '-1002010097355';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

interface Values {
  name: string;
  telegram: string;
  email: string;
  message: string;
}

export const SendMessageTg = async (values: Values) => {
  const { name, telegram, email, message } = values;
  const text = `Повідомлення від: ${name}\n${message}\nTelegram: ${telegram}\nEmail: ${email}`;
  try {
    await axios.post(
      URL_API,
      {
        chat_id: CHAT_ID,
        text,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error: any) {
    Notiflix.Notify.failure(error.message);
  }
};
