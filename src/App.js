import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/LoginScreen/Login'
import Register from './components/RegisterScreen/Register'
import RegisterPersonalInfo from './components/RegisterScreen/RegisterPersonalInfo';
import RegisterAdditionalInfo from './components/RegisterScreen/RegisterAdditionalInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login/>}/>

          <Route>
            <Route exact path="register" element={<Register/>}/>
            <Route exact path="register/1" element={<RegisterPersonalInfo/>}/> 
            <Route exact path="register/2" element={<RegisterAdditionalInfo/>}/> 
          </Route>

        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
