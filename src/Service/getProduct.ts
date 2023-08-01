import axios from "axios"
import { getEnvURL } from "./service.util"

export const getProduct=()=>{
    const urlPrefix = getEnvURL();
    const url =`${urlPrefix}/products`;
    // console.log(axios.get(url));
    
    return axios.get(url)
}
