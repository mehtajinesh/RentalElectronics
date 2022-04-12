import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/profile/profile";
import EditProfile from "./components/profile/editProfile";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route index element={<Profile/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="editProfile" element={<EditProfile/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
