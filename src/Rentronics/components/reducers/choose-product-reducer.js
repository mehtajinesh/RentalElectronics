
const choseProductReducer = (state = null, action) => {
    switch (action.type) {
        case 'SELECT_PRODUCT':
            return action.product;
        case 'RESET_PRODUCT':
            return null;
        default:
            return state;
    }
}

export default choseProductReducer