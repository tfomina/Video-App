import axios from "axios";

const URL = "http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd";

export const loadTimestampsApi = async () => {
  const result = await axios(URL);
  return result.data || [];
};
