import axios from "axios";
const CATEGORY_API = 'http://localhost:4000/api/category';

export const getCategoryIdByName = async (name) => {
    const response = await axios.get(`${CATEGORY_API}/name/${name}`)
    return response.data;
};

export const getAllBrands = async (cid) => {
    const response = await axios.get(`${CATEGORY_API}/brands/${cid}`)
    return response.data
}





