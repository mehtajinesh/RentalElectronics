
const homeScreenReducer = (state = {"treadingItems":[],"popularReviews":[],"recentItems":[]}, action) => {
    switch (action.type) {
        case 'FETCH_TREADING_REVIEW_RECENT':
            return action.homeScreenData
        default:
            return state;
    }
}


export default homeScreenReducer;