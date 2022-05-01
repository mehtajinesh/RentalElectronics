import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const GET_USER_CART_API = `${API_BASE}/cart`;
const UPDATE_ITEM_COUNT_API = `${API_BASE}/updateItemCountCart`;
const REMOVE_ITEM_CART_API = `${API_BASE}/removeItemCart`;
const PLACE_ORDER_API = `${API_BASE}/placeOrder`;

export const getUserCart = async (data) => {
    const response = await axios.post(GET_USER_CART_API, null,{ params: data});
    return response.data;
}

export const updateProductItemCountCart = async (data) => {
    const response = await axios.post(UPDATE_ITEM_COUNT_API, null,{ params: data});
    return response.data;
}

export const removeProductItemCart = async (data) => {
    const response = await axios.post(REMOVE_ITEM_CART_API, null,{ params: data});
    return response.data;
}

export const placeOrder = async (data) => {
    const response = await axios.post(PLACE_ORDER_API, null,{ params: data});
    return response.data;
}