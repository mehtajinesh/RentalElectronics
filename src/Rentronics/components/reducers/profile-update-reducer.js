const updateReducer = (state = false, action) => {
    switch (action.type) {
        case 'UPDATE_PROFILE':
            return action.update
        default:
            return state;
    }
}


export default updateReducer;