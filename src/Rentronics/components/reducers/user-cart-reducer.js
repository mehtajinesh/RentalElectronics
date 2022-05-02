
const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_CART_DATA':
            return action.cartData
        default:
            return state;
    }
}

export default cartReducer;