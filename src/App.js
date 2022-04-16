import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from 'react'
import Login from './components/loginScreen/Login'
import RegisterScreen from './components/registerScreen/index'
import LoginContext from './context/loginContext';


function App() {
  const [isLoggedin, setLoginStatus] = useState(false);

  return (      
    <>
      <LoginContext.Provider value={[isLoggedin, setLoginStatus]}>

        <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route path="login" element={<Login/>}/>
                <Route exact path="register/*" element={<RegisterScreen/>}/>
              </Route>
            </Routes>
        </BrowserRouter>

      </LoginContext.Provider>
    
    </>
    
  );
}

export default App;
