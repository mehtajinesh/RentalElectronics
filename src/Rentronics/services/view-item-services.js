import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const PRODUCT_PAGE_API = `${API_BASE}/product`;
const ADD_PRODUCT_TO_CART_API = `${API_BASE}/addProductToCart`;
const ADD_PRODUCT_TO_RECENTLY_VIEWED_API = `${API_BASE}/addProductToRecentlyViewed`;
const ADD_PRODUCT_TO_WISHLIST_API = `${API_BASE}/addProductToWishlist`;


export const getProductPageData = async (data) => {
    const response = await axios.post(PRODUCT_PAGE_API, null,{ params: data});
    return response.data;
}

export const addProductToCart = async (data) => {
    const response = await axios.post(ADD_PRODUCT_TO_CART_API, null,{ params: data});
    return response.data;
}

export const addProductToRecentItems = async (data) => {
    const response = await axios.post(ADD_PRODUCT_TO_RECENTLY_VIEWED_API, null,{ params: data});
    return response.data;
}

export const addProductToWishlist = async (data) => {
    const response = await axios.post(ADD_PRODUCT_TO_WISHLIST_API, null,{ params: data});
    return response.data;
}