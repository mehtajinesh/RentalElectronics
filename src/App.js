import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Rentronics from "./Rentronics";
import HomeScreen from "./Rentronics/components/home-screen";
import Login from "./Rentronics/components/login";
import Register from "./Rentronics/components/register";
import AddItem from "./Rentronics/components/list-item/add-item";
import EditItem from "./Rentronics/components/list-item/edit-item";
// import ViewProfile from "./Rentronics/components/view-profile";
// import EditProfile from "./Rentronics/components/edit-profile";
import ViewItem from "./Rentronics/components/view-item";
import Cart from "./Rentronics/components/cart";
// import OrderSummart from "./Rentronics/components/order-summary";
// import SearchResults from "./Rentronics/components/search-results";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Rentronics/>}>
                    <Route index element={<HomeScreen/>}/>
                    <Route path="home" exact={true} element={<HomeScreen/>}/>
                    <Route path="login" exact={true} element={<Login/>}/>
                    <Route path="register" exact={true} element={<Register/>}/>
                    <Route path='additem' exact={true} element={<AddItem/>}/>
                    <Route path='edititem/:id' exact={true} element={<EditItem/>}/>
                    {/*<Route path="viewProfile" exact={true} element={<ViewProfile/>}/>*/}
                    {/*<Route path="editProfile" exact={true} element={<EditProfile/>}/>*/}
                    <Route path="viewItem/:id" exact={true} element={<ViewItem/>}/>
                    {/*<Route path="searchResults" exact={true} element={<SearchResults/>}/>*/}
                    {/*<Route path="orderSummary" exact={true} element={<OrderSummary/>}/>*/}
                    <Route path="cart" exact={true} element={<Cart/>}/>
                    {/*<Route path="privacy" exact={true} element={<Privacy/>}/>*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
