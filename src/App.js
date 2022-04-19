import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/login/login'
import RegisterScreen from './components/register/index'
import Profile from "./components/profile/profile";
import EditProfile from "./components/profile/editProfile";
import RentalItem from "./components/rental-item/rentalItem";
import Header from './components/header/index'
import Footer from './components/footer/index'


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
                
                <Route path="rentalItem" element={<RentalItem/>}/>
              </Route>
            </Routes>
          <Footer/>
      </BrowserRouter>    
    </>
   );
}

export default App;
