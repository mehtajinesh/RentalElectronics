
export const initalState = {
    isLoggedIn : false,
    renter: true,
    user: {
        _id: 0,
        email: '',
        firstname: '',
        lastname: '',
        phoneNumber: '',
        dob: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipcode: '',
        role: '',
        profileImg: ''
    }
};


const loginReducer = (state = initalState, action)  => {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };

        case "LOG_OUT":
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        
        case "SWITCH_ROLE":
            return {
                ...state, 
                renter : !state.renter
            };

        default:
            return state;
    }
};
export default loginReducer;
