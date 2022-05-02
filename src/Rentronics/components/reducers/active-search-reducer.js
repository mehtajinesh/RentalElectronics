const activeSearchReducer = (state = {
    'category': 'All',
    'activeFeatureFilterIDs': [],
    'searchKeyword': ''
}, action) => {
    switch (action.type) {
        case 'UPDATE_CATEGORY_FEATURE_FILTERS':
            return {
                ...state,
                "category": action.newCategory,
                "activeFeatureFilterIDs": action.newFeatureFilterIDs
            };
        case 'UPDATE_SEARCH_WORD':
            return {
                ...state,
                "searchKeyword": action.searchWord,
            };
        case 'ADD_FILTER':
            return {
                ...state,
                "activeFeatureFilterIDs": action.searchWord,
            };
        case 'REMOVE_FILTER':
            return {
                ...state,
                "activeFeatureFilterIDs": action.searchWord,
            };
        default:
            return state;
    }
}


export default activeSearchReducer;