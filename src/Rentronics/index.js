import {Outlet} from "react-router-dom";
import {Provider} from "react-redux";
import Header from "./components/header";
import Footer from "./components/footer";
import {combineReducers, createStore} from "redux";
import loginReducer from "./components/reducers/login-reducer";
import userReducer from "./components/reducers/user-reducers";
import currentUserReducer from "./components/reducers/current-user-reducer";
import listedProducts from './components/reducers/listed-product-reducer'
import searchReducer from "./components/reducers/search-reducer";
import chooseProductReducer from "./components/reducers/choose-product-reducer";
import updateReducer from "./components/reducers/profile-update-reducer";

const reducer = combineReducers({
    loggedIn: loginReducer, users: userReducer, currentUser: currentUserReducer, listedProducts: listedProducts, activeSearch: searchReducer,
    chooseProduct: chooseProductReducer, updateReducer: updateReducer
});

const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
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