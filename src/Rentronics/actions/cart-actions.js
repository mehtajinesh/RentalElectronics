import * as service from "../services/cart-services";

export const GET_CART_DATA = 'GET_CART_DATA';

export const getUserCart = async (dispatch, data) => {
    const cartData = await service.getUserCart(data);
    dispatch({
        type: GET_CART_DATA, cartData
    });
}

export const updateProductItemCountCart = async (dispatch,data) => {
    const cartData = await service.updateProductItemCountCart(data);
    dispatch({
        type: GET_CART_DATA, cartData
    });
}

export const removeProductItemCart = async (dispatch,data) => {
    const cartData = await service.removeProductItemCart(data);
    dispatch({
        type: GET_CART_DATA, cartData
    });
}

export const placeOrder = async (data) => {
    await service.placeOrder(data);

}