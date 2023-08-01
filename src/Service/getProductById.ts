import axios from "axios";
import { getEnvURL } from "./service.util";

export const getProductById = (id: string) => {
  const urlPrefix = getEnvURL();
  const url = `${urlPrefix}/products/${id}`;
  // console.log(axios.get(url));

  return axios.get(url);
};
