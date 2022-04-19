import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/login/login'
import RegisterScreen from './components/register/index'
import Profile from "./components/profile/profile";
import EditProfile from "./components/profile/editProfile";
import RentalItem from "./components/rental-item/rentalItem";
import AddItem from './components/add-item/addItem';
import EditItem from './components/add-item/editItem'
import Header from './components/header/index'
import Footer from './components/footer/index'
import MyCart from './components/my-cart/myCart';


function App() {

  return (      
    <>
      <BrowserRouter>
          <Header/>
            <Routes>
              <Route path="/">
                <Route path="login" element={<Login/>}/>
                <Route exact path="register/*" element={<RegisterScreen/>}/>
                
                <Route path="profile" element={<Profile/>}/>
                <Route path="editProfile" element={<EditProfile/>}/>
                <Route path="cart" element={<MyCart/>}/>

                <Route path="rentalItem" element={<RentalItem/>}/>
                <Route path="additem" element={<AddItem/>}/>
                <Route path="myitem/:id" element={<EditItem/>}/>

              </Route>
            </Routes>
          <Footer/>
      </BrowserRouter>    
    </>
   );
}

export default App;
