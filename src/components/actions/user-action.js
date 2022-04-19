
export const CreateUser = (user) => {
    return {
        type: 'CREATE_USER',
        payload: user
    };
};

export const CheckUserExists = (user) => {
    return {
        type: 'CHECK_USER_EXISTS',
        payload: user
    };
};

export const UpdateUser = (user) => {
    return {
        type: 'UPDATE_USER',
        payload: user
    }
}

export const RegisterInfo = (user) => {
    return {
        type: 'REGISER_PERSONAL_INFO',
        payload: user
    }
}

export const RegisterAddressInfo = (user) => {
    return {
        type: 'REGISER_ADDRESS_INFO',
        payload: user
    }
}

// TODO: this will be deleted when backend is implemented
export const ResetUser = () => {
    return {
        type: 'RESET_USER'
    };
};


// export const UpdateLoginUser = (user) => {
//     return {
//         type: 'UPDATE_LOGIN_USER',
//         payload: user
//     }
// }


// export const RegisterUser = (user) => {
//     return {
//         type: 'REGISTER_USER',
//         payload: user
//     }
// }