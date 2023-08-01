import axios from "axios"
import { getEnvURL } from "./service.util"

export const getCarts = () => {
    const urlPrefix = getEnvURL();
    const url = `${urlPrefix}/carts/5`;
    // console.log(axios.get(url));

    return axios.get(url)
}
