import userJson from '../data/user.json'

const userReducer = (state = userJson, action)  => {
    switch (action.type) {

        case "CHECK_USER_EXISTS":
            return state.map(userInfo => {
                if (userInfo.user.email === action.payload.email && userInfo.user.password === action.payload.password)
                {
                    userInfo.isSearched = true;
                    return userInfo;
                }
                else {
                    return userInfo;
                }
            });

        case "CREATE_USER":
            const newUser = {
                isSearched : true,
                user : 
                {
                    email: action.payload.email,
                    password: action.payload.password,
                    firstname: '',
                    lastname: '',
                    dob: '',
                    phoneNumber: '',
                    address1: '',
                    address2: '',
                    city: '',
                    state: '',
                    zipcode: '',
                    role: '',
                    profileImg: '',
                }
            }

            return [
                newUser,               
                ...state
            ];


        case "UPDATE_USER":
            return state.map(userInfo => {
                if (userInfo.isSearched === true)
                {
                    userInfo.user.email = action.payload.email;
                    userInfo.user.firstname = action.payload.firstname;
                    userInfo.user.lastname = action.payload.lastname;
                    userInfo.user.dob = action.payload.dob;
                    userInfo.user.phoneNumber = action.payload.phoneNumber;
                    userInfo.user.address1 = action.payload.address1;
                    userInfo.user.address2 = action.payload.address2;
                    userInfo.user.city = action.payload.city;
                    userInfo.user.state = action.payload.state;
                    userInfo.user.zipcode = action.payload.zipcode;
                    userInfo.user.role = action.payload.role;
                    userInfo.user.profileImg = action.payload.profileImg;

                    return userInfo;
                }
                else {
                    return userInfo;
                }
            });


            case "REGISER_PERSONAL_INFO":
            return state.map(userInfo => {
                if (userInfo.isSearched === true)
                {
                    userInfo.user.firstname = action.payload.firstname;
                    userInfo.user.lastname = action.payload.lastname;
                    userInfo.user.dob = action.payload.dob;
                    userInfo.user.phoneNumber = action.payload.phoneNumber;

                    return userInfo;
                }
                else {
                    return userInfo;
                }
            });

            case "REGISER_ADDRESS_INFO":
                return state.map(userInfo => {
                    if (userInfo.isSearched === true)
                    {
                        userInfo.user.address1 = action.payload.address1;
                        userInfo.user.address2 = action.payload.address2;
                        userInfo.user.city = action.payload.city;
                        userInfo.user.state = action.payload.state;
                        userInfo.user.zipcode = action.payload.zipcode;
                        userInfo.user.role = action.payload.role;
                        userInfo.user.profileImg = action.payload.profileImg;
    
                        return userInfo;
                    }
                    else {
                        return userInfo;
                    }
                });

        // TODO: this will be deleted when backend is implemented
        case "RESET_USER":
            return state.map(userInfo => {
                if (userInfo.isSearched === true)
                {
                    userInfo.isLoggedIn = false;
                    return userInfo;
                }
                else {
                    return userInfo;
                }
            });

        default:
            return state;
    }
};
export default userReducer;

