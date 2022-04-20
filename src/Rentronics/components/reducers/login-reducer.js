
const loginReducer = (state = false, action) => {
    switch (action.type) {
        case 'UPDATE_LOGIN_STATE':
            return action.loggedIn
        default:
            return state;
    }
}


export default loginReducer;