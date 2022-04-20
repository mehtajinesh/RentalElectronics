import RegisteredUser from "./../data/registered-users.json"

const userReducer = (state = RegisteredUser, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.newUser];
        default:
            return state;
    }
}


export default userReducer;