import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const SEARCH_PAGE_API = `${API_BASE}/search`;
const CATEGORY_FEATURE_API = `${API_BASE}/categoryFeatures`;

export const getSearchResults = async (data) => {
    const response = await axios.post(SEARCH_PAGE_API, data);
    return response.data;
}

export const getCategoryFeaturesIDsData = async () => {
    const response = await axios.get(CATEGORY_FEATURE_API);
    return response.data;
}