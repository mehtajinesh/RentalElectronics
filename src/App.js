import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from 'react'
import Login from './components/login/Login'
import RegisterScreen from './components/register/index'
import LoginContext from './context/loginContext';
import Profile from "./components/profile/profile";
import EditProfile from "./components/profile/editProfile";
import RentalItem from "./components/rental-item/rentalItem";

import Header from './components/header/index'
import Footer from './components/footer/index'

function App() {
  const [isLoggedin, setLoginStatus] = useState(false);

  return (      
    <>
      <LoginContext.Provider value={[isLoggedin, setLoginStatus]}>

        <BrowserRouter>
             {/* <div className="container-fluid"> */}

          <Header/>
            <Routes>
              <Route path="/">
                <Route path="profile" element={<Profile/>}/>
                <Route path="editProfile" element={<EditProfile/>}/>
                <Route path="rentalItem" element={<RentalItem/>}/>
                <Route path="login" element={<Login/>}/>
                <Route exact path="register/*" element={<RegisterScreen/>}/>
              </Route>
            </Routes>
          <Footer/>
        </BrowserRouter>

      </LoginContext.Provider>
    
    </>
   );
}

export default App;
