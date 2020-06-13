import axios from "axios";

const URL = "http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd";

export const loadTimestamps = () => axios(URL);
