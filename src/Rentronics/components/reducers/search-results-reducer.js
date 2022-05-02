const searchResultsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_SEARCH_RESULTS':
            return action.searchResults
        default:
            return state;
    }
}

export default searchResultsReducer;