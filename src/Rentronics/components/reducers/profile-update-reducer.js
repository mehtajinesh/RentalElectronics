const updateReducer = (state = false, action) => {
    switch (action.type) {
        case 'UPDATE_PROFILE':
            return action.update

        case 'UPDATE_USER_ROLE':
            return {...state, userType: action.userType}

        default:
            return state;
    }
}
export default updateReducer;