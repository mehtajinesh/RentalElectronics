import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/profile/profile";
import EditProfile from "./components/profile/editProfile";
import RentalItem from "./components/rental-item/rentalItem";

function App() {
  return (
      <BrowserRouter>
        <div className="container ms-4 me-0">
          <Routes>
            <Route index element={<Profile/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="editProfile" element={<EditProfile/>}/>
            <Route path="rentalItem" element={<RentalItem/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
