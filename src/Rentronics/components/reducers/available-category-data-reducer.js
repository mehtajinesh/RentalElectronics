const availableCategoryDataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_CATEGORY_FEATURES_DATA':
            return action.data;
        default:
            return state;
    }
}
export default availableCategoryDataReducer;