import { object, string } from 'yup';

export const schema = object({
  name: string().trim().required('Name is a required field'),
  telegram: string().trim(),
  email: string().email().required('Email is a required field'),
  message: string().trim().required('Message is a required field'),
});
