import * as service from "../services/view-item-services";

export const GET_ITEM_DATA = 'FETCH_ITEM_DATA';

export const getProductPageData = async (dispatch, data) => {
    const productPageData = await service.getProductPageData(data);
    const loadingState = false
    dispatch({
        type: 'UPDATE_LOADING_STATE', loadingState
    })
    dispatch({
        type: GET_ITEM_DATA, productPageData
    });
}

export const addProductToCart = async (data) => {
    await service.addProductToCart(data);
}

export const addProductToRecent = async (data) => {
    await service.addProductToRecentItems(data);
}

export const addProductToWishlist = async (data) => {
    await service.addProductToWishlist(data);
}