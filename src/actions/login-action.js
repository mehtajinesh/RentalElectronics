
export const LogIn = (user) => {
    return {
        type: 'LOG_IN',
        payload : user
    };
};

export const LogOut = () => {
    return {
        type: 'LOG_OUT'
    };
};

export const SwitchRole = () => {
    return {
        type: 'SWITCH_ROLE'
    };
};
