import ListedProductItems from '../data/listed-product-items.json'

const productReducer = (state = ListedProductItems, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [action.newItem, ...state];
        
        case 'EDIT_ITEM':
            const newListedItems = state.map(item => {
                const updatedItem = item.item_id === action.updatedItem.item_id? action.updatedItem : item;
                return updatedItem;
              });
              return newListedItems;

        case 'DELETE_ITEM':
            return state.filter(item =>
                        item.item_id !== action.item_id);

        default:
            return state;
    }
}


export default productReducer;