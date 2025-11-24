import axios from "axios";

const getAllNews = async () => {
    try {
        const response = await axios.get("http://localhost:3000/news");
        return response.data;
    } catch (error) {
        return error;
    }
}

export { getAllNews };