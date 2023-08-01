import { environment } from "../../environment";
export const getEnvURL = () => `${environment.SCHEMA}://${environment.API_URL}`;