import axios from "axios";
const PRODUCT_API = 'http://localhost:4000/api/product';


export const addItem = async (product) => { 
    const uid = product.sellerID;
    const response = await axios.post(`${PRODUCT_API}/${uid}`, product);
    return response.data;
};

export const findItemById = async (pid) => {
    const response = await axios.get(`${PRODUCT_API}/email/${pid}`);
    return response.data;
}
