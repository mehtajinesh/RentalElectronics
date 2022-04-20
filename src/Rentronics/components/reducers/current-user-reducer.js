const initialState = {
    _id: '',
    email: '',
    firstName: '',
    lastName: '',    
    userType: '',
}


const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return action.currentUser;
        default:
            return state;
    }
}

export default currentUserReducer