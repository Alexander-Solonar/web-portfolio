import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyBFA2Q7UU0AqZEyl7eNMXGcyeO0yrZsT-M",
  authDomain: "my-portfolio-c3ff0.firebaseapp.com",
  databaseURL: "https://my-portfolio-c3ff0-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-c3ff0",
  storageBucket: "my-portfolio-c3ff0.appspot.com",
  messagingSenderId: "457923746444",
  appId: "1:457923746444:web:aa71a9e1d30bf1a7d6b9a9",
  measurementId: "G-8YTR94JDSK",
};

const databaseURL = `${firebaseConfig.databaseURL}/portfolio.json`;

export const getSlidePortfolio = async () => {
  const response = await axios.get(databaseURL);
  return response.data;
};
