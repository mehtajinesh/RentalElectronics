import {Outlet} from "react-router-dom";
import {Provider} from "react-redux";
import Header from "./components/header";
import Footer from "./components/footer";
import {combineReducers, createStore} from "redux";
import loginReducer from "./components/reducers/login-reducer";
import userReducer from "./components/reducers/user-reducers";

const reducer = combineReducers({
    loggedIn: loginReducer, users: userReducer
});

const store = createStore(reducer);
const Rentronics = () => {
    return (
        <Provider store={store}>
        <div className="d-flex flex-column">
            <Header/>
            <div className="container">
                <Outlet/>
            </div>
            <Footer/>
        </div>
        </Provider>
    );
};
export default Rentronics;