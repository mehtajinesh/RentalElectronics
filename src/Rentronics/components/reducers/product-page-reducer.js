
const productPageReducer = (state = {"productDetails":{},"productFeatures":{},"productReviews":{}}, action) => {
    switch (action.type) {
        case 'FETCH_ITEM_DATA':
            return action.productPageData
        default:
            return state;
    }
}


export default productPageReducer;