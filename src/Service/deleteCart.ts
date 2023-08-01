import axios from "axios";
import { getEnvURL } from "./service.util";

export const deleteCarts = (id: string) => {
  const urlPrefix = getEnvURL();
  const url = `${urlPrefix}/carts/${id}`;
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: url,
    headers: {},
  };
  // console.log(axios.get(url));

  return axios.request(config);
};
