import {createContext} from 'react'

const loginContext = createContext({
    isLoggedin : false,
    setLoginStatus: () => {}
    // TODO: add user and auth
});

export default loginContext