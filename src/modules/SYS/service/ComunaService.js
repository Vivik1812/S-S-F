import axios from "axios";

const API_URL = "http://localhost:8080/api/comunas";

class ComunaService {
    async getComunas() {
        const response = await axios.get(API_URL);
        return response.data;
    }
}

export default new ComunaService();