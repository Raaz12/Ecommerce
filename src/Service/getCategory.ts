import axios from "axios"
import { getEnvURL } from "./service.util"

export const getCategory=()=>{
    const urlPrefix = getEnvURL();
    const url =`${urlPrefix}/products/categories`;
    // console.log(axios.get(url));
    
    return axios.get(url)
}
