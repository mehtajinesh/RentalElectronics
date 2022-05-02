const loadingReducer = (state = true, action) => {
    switch (action.type) {
        case 'UPDATE_LOADING_STATE':
            return action.loadingState
        default:
            return state;
    }
}


export default loadingReducer;