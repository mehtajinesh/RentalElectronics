// import RegisteredUser from "../../data/registered-users.json"
import { FIND_ALL_USERS, FIND_USER_BY_ID, FIND_USER_BY_EMAIL, CREATE_USER, DELETE_USER, UPDATE_USER } from "../actions/users-action";

const userReducer = (state = null, action) => {
    switch (action.type) {
        case FIND_ALL_USERS:
            return action.users;
        
        case FIND_USER_BY_ID:
            return action.user;

        case FIND_USER_BY_EMAIL:
            return action.user;
    
        case CREATE_USER:
            return [...state, action.newUser];
        
        case DELETE_USER:
            return state.filter(
                user => user._id !== action.user._id
            );
        
        case UPDATE_USER:
            return state.map(
                user => user._id === action.user._id ? action.user : user
            );
            
        default:
            return state;
    }
}


export default userReducer;