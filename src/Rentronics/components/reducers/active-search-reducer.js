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
            const newFilters = [...state["activeFeatureFilterIDs"], action.filter]
            return {
                ...state,
                "activeFeatureFilterIDs": newFilters
            }
        case 'REMOVE_FILTER':
            const updatedFilterIDs = state["activeFeatureFilterIDs"].filter(filterID => filterID !== action.filter)
            return {
                ...state,
                "activeFeatureFilterIDs": updatedFilterIDs
            }
        default:
            return state;
    }
}


export default activeSearchReducer;