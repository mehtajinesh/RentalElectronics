import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/LoginScreen/Login'
import Register from './components/RegisterScreen/Register'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
