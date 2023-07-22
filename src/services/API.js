import axios from "axios";

axios.defaults.baseURL = "https://646113d4491f9402f49e1b89.mockapi.io";

export const getListCardSkills = async () => {
  const response = await axios.get("/skills");
  return response.data;
};
