import axios from "axios";

const API_BASE = "http://localhost:4000/api";
const PUBLIC_DEMO_API = `${API_BASE}` + "/public";


export const findPublicDemo = async () => {
    const response = await axios.get(PUBLIC_DEMO_API);
    return response.data;
}