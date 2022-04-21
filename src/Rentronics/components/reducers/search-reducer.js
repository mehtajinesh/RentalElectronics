
const searchReducer = (state = "All", action) => {
    switch (action.type) {
        case 'UPDATE_CATEGORY':
            return action.newCategory
        default:
            return state;
    }
}


export default searchReducer;