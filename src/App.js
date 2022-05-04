import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-loading-skeleton/dist/skeleton.css'

import Rentronics from "./Rentronics";
import HomeScreen from "./Rentronics/components/home-screen";
import Login from "./Rentronics/components/login";
import Register from "./Rentronics/components/register";
import AddItem from "./Rentronics/components/list-item/add-item";
import EditItem from "./Rentronics/components/list-item/edit-item";
import ViewProfile from "./Rentronics/components/profile/view-profile/viewProfile";
import EditProfile from "./Rentronics/components/profile/edit-profile/editProfile";
import ViewItem from "./Rentronics/components/view-item";
import Cart from "./Rentronics/components/cart";
import Admin from "./Rentronics/components/admin"
// import OrderSummary from "./Rentronics/components/order-summary";
import SearchResults from "./Rentronics/components/search-results";
import MyItems from "./Rentronics/components/list-item/my-items";
import ViewPublicProfile
  from "./Rentronics/components/profile/view-profile/view-public-profile";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rentronics/>}>
            <Route index element={<HomeScreen/>}/>
            <Route path="home" exact={true} element={<HomeScreen/>}/>
            <Route path="login" exact={true} element={<Login />}/>
            <Route path="register" exact={true} element={<Register/>}/>
            <Route path='additem' exact={true} element={<AddItem/>}/>
            <Route path='edititem/:pid' exact={true} element={<EditItem/>}/>
            <Route path='myitems' exact={true} element={<MyItems/>}/>

            <Route path="profile" exact={true} element={<ViewProfile/>}/>
            <Route path="profile/:uid" exact={true} element={<ViewPublicProfile/>}/>
            <Route path="editProfile" exact={true} element={<EditProfile/>}/>
            <Route path="viewItem/:id" exact={true} element={<ViewItem/>}/>
            <Route path="searchResults" exact={true} element={<SearchResults/>}/>
            {/*<Route path="orderSummary" exact={true} element={<OrderSummary/>}/>*/}
            <Route path="cart" exact={true} element={<Cart/>}/>
            <Route path="admin" exact={true} element={<Admin/>}/>
            {/*<Route path="privacy" exact={true} element={<Privacy/>}/>*/}
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
