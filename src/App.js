import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/loginScreen/Login'
import RegisterScreen from './components/registerScreen/index'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login/>}/>
          <Route exact path="register/*" element={<RegisterScreen/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
