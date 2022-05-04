import React from 'react'
import { useState, useEffect } from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import * as authService from "../services/auth-service"
import * as service from "../services/user-service.js";
import { useDispatch } from "react-redux";


const Admin = () => {
  let loggedIn = useSelector(state => state.loggedIn);
  let currentUser = useSelector(state => state.currentUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  let userRoles = new Array(users.length);
  let items = new Array(users.length).fill(true);

  const [select, setSelected] = useState(items);

  const getUsers = async () => {
    try{
      const currentUser = await authService.profile();

      const listOfUsers = await service.findAllUsers();
      setUsers(listOfUsers);
      userRoles = listOfUsers.map(user => user.userType);
      console.log(userRoles);
      

    } catch (e) {
      setUsers();
    }
  }


useEffect(() => {
  if (!loggedIn && currentUser.userType !== "admin") {
    navigate('/login')
  } else {
    getUsers();
  }  
}, []);



  const onClick = async (index) => {
    console.log("clicked!", index);
    let cloneSelect = [...select];
    cloneSelect[index] = !cloneSelect[index];
    setSelected(cloneSelect);

    // update user
    const updatedUser = await service.updateUser(users[index]._id, users[index]);

    dispatch({
      type: "SET_CURRENT_USER",
      currentUser
    })


    alert(users[index].firstName + "'s role has been updated!")

  }


  const updateButton = (index) => {
    return (
      <button type="button" 
        class="btn btn-outline-primary" 
        onClick={() => onClick(index)}>
        Update
      </button>
    );
  };

  const updateUserRoles = (e, index) => {
    let temp_state = [...users];
    
    let temp_element = { ...temp_state[index] };
    
    temp_element.userType = e.target.value;
    
    temp_state[index] = temp_element;
    
    setUsers( temp_state );

  }


  return (
    <div className="container my-5">
      <div className="row">
        
        <div className="col-sm-1 col-md-1 col-lg-2 col-xl-2"></div>
        <div className="col-sm-9 col-md-9 col-lg-8 col-xl-8 px-5 py-2">
            <h3>Manage Users</h3>

            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Update</th>

                  </tr>
                </thead>
                <tbody>
                    {
                      users.map( (user, i) => 
                      
                      <tr>
                      <th scope="row">{i + 1}</th>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>
                        <select class="form-select" aria-label="Default select example" value={users[i].userType} onChange={(e) => updateUserRoles(e, i)}>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                            <option value="admin">Admin</option>
                        </select>
                      </td>
                      <td>
                      {updateButton(i)}
                      </td>
                    </tr>                  
                    )
                  }
               </tbody>

            </table>
        
        </div>
        <div className="col-sm-1 col-md-1 col-lg-2 col-xl-2"></div>

      </div>
    </div>
  )
}

export default Admin