import axios from "axios";
const FEATURE_API = 'http://localhost:4000/api/features';

export const addFeature = async (feature) => {
    const response = await axios.post(FEATURE_API, feature)
    return response.data;
};

export const addProductFeature = async (productFeature) => {
    const response = await axios.post(`${FEATURE_API}/productFeature`, productFeature)
    return response.data;
}

export const getAllFeaturesIDsForProduct = async (pid) => {
    const response = await axios.get(`${FEATURE_API}/fid/${pid}`)
    return response.data;
}

export const getFeatureById = async (fid) => {
    const response = await axios.get(`${FEATURE_API}/${fid}`)
    return response.data;
}

export const updateFeature = async (fid, feature) => {
    const response = await axios.put(`${FEATURE_API}/${fid}`, feature);
    return response.data;
}