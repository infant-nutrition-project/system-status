import axios from "axios";
import { SYSTEM_STATUS_API } from "./ApiConfig";

class DataService {
    systemStatusData(secret) {
        return axios.get(SYSTEM_STATUS_API.replace("SECRET", secret))
    }
}

export default new DataService();