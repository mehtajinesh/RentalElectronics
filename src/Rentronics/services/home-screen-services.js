import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const HOME_PAGE_API = `${API_BASE}/home`;

export const getHomePageData = async (data) => {
    const response = await axios.post(HOME_PAGE_API, null,{ params: data});
    return response.data;
}
