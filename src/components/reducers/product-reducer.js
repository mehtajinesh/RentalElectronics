
const productReducer = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT': 
            const newProduct = {
                // TODO: fill info of product
            }
            return [
                newProduct,
                ...state,
            ];
        
        case 'UPDATE_PRODUCT': {
            return state;
        }

        default:
            return state;
    }

}
   
export default productReducer;