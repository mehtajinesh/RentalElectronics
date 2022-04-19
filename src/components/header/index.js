import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { LogOut, SwitchRole } from '../actions/login-action'
import { ResetUser } from '../actions/user-action'
import './header.css'


const Header = () => {
    const currentLogin = useSelector(state => state.login);
    // const currentUser = useSelector(state => state.user);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(LogOut());
        dispatch(ResetUser());
    }

    const handleSwitch = () => {
        dispatch(SwitchRole());
    }

  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light border-bottom bg-white sticky-top py-3 px-5">
            <div className="container-fluid">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="navbar-brand">Rentronics</div>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        {/* Only show add item btn when leaser */}
                        <li className="nav-item">
                            {
                                !currentLogin.renter && currentLogin.isLoggedIn &&
                                <Link to="">
                                    <button type="button" className="btn btn-outline-secondary rounded-pill mt-2 mx-2">Add Item</button>
                                </Link>
                            }  

                        </li>

                        <li className="nav-item">
                            {
                                currentLogin.renter && !currentLogin.isLoggedIn &&
                                <button type="button" className="btn btn-outline-secondary rounded-pill px-4 mx-1" onClick={handleSwitch}>Become Leaser</button>
                            }   

                            {
                                !currentLogin.renter && !currentLogin.isLoggedIn &&
                                <button type="button" className="btn btn-outline-secondary rounded-pill px-4 mx-1" onClick={handleSwitch}>Rent Item</button>
                            }  

                            {
                                currentLogin.renter && currentLogin.isLoggedIn &&
                                <button type="button" className="btn btn-outline-secondary rounded-pill mt-2 mx-2" onClick={handleSwitch}>Become Leaser</button>
                            }   

                            {
                                !currentLogin.renter && currentLogin.isLoggedIn &&
                                <button type="button" className="btn btn-outline-secondary rounded-pill mt-2 mx-2" onClick={handleSwitch}>Rent Item</button>
                            }       
                        </li>


                        <li className="nav-item">
                            {
                                !currentLogin.isLoggedIn &&
                                <Link to="login">
                                    <button type="button" className="btn btn-outline-secondary rounded-pill px-4 mx-1">Login</button>
                                </Link>
                            }
                        </li>
                            
                        { currentLogin.isLoggedIn &&
                            <li class="nav-item dropdown">

                                <button className="btn btn-outline-secondary rounded-pill nav-link dropdown-toggle mt-0" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-user-circle fa-2x"></i>
                                </button>

                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><Link to="profile" className="dropdown-item">Profile</Link></li>
                                    <li><Link to="/" className="dropdown-item" onClick={handleLogout}>Logout</Link></li>
                                    {/* <li><hr className="dropdown-divider"/></li>
                                    <li><Link to="" className="dropdown-item">Something else here</Link></li> */}
                                </ul>
                            </li>
                        }
                            

        
                    </ul>
        
                </div>
            </div>
        </nav>

      </>

  )
}

export default Header