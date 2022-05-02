import * as service from "../services/search-services";

export const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';
export const UPDATE_CATEGORY_FEATURES_DATA = 'UPDATE_CATEGORY_FEATURES_DATA';
export const UPDATE_CATEGORY_FEATURE_FILTERS = 'UPDATE_CATEGORY_FEATURE_FILTERS';

export const getSearchResults = async (dispatch, data) => {
    const searchResults = await service.getSearchResults(data);
    dispatch({
        type: GET_SEARCH_RESULTS, searchResults
    });
}

export const getCategoryFeaturesIDs = async (dispatch) => {
    const data = await service.getCategoryFeaturesIDsData();
    dispatch({
        type: UPDATE_CATEGORY_FEATURES_DATA, data
    });
}