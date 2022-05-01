import bootstrap from 'bootstrap';
import { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import * as authService from "../services/auth-service"

const Header = () => {
    let loggedIn = useSelector(state => state.loggedIn);
    let currentUser = useSelector(state => state.currentUser);
    const [user, setUser] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleProfile = async () => {
        navigate('/profile')
    }

    const checkIsLoggedIn = async () => {
        try {
          const currentUser = await authService.profile();
          console.log(currentUser);

          dispatch({
              type: 'SET_CURRENT_USER',
              currentUser
          })

          setUser(currentUser);

          loggedIn = true;
          dispatch({
            type:'UPDATE_LOGIN_STATE',
            loggedIn
        });
    
        } catch (e) {
            
            loggedIn = false;

            dispatch({
              type:'UPDATE_LOGIN_STATE',
              loggedIn
          });
        }
    }
    
    useEffect(() => {
        checkIsLoggedIn()}, [loggedIn, currentUser]);

    const handleLogout = async () => {
        await authService.logout();

        loggedIn = false;

        dispatch({
            type:'UPDATE_LOGIN_STATE',
            loggedIn
        });

        dispatch({
            type: 'REMOVE_CURRENT_USER',
        })

        setUser();

        navigate('/login')
    }

    const handleCart = () => {
        navigate('/cart');
    }

    const handleAddItem = async () => {

        // if (currentUser.userType === 'buyer') {
        //     await userService.updateUser(currentUser._id, {userType: 'buyer_seller'});
        //     setUpdate(true);
        // }

        const uid = currentUser._id;
        navigate('/additem')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom bg-white sticky-top py-3 px-5">
            <div className="container-fluid">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="navbar-brand">Rentronics</div>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                            <li className="nav-item">     
                                {
                                    !user &&
                                    <button type="button" className="btn rounded-pill" onClick={handleCart}>
                                        <i className="fas fa-shopping-cart"></i> Cart   
                                    </button>
                                }
                                {
                                    // I had to do this to match the margins
                                    user &&
                                    <button type="button" className="btn rounded-pill mt-2" onClick={handleCart}>
                                        <i className="fas fa-shopping-cart"></i> Cart   
                                    </button>
                                }

                        {
                            currentUser && currentUser.userType === "buyer_seller" &&
                            <li className="nav-item">
                                <button type="button" className="btn btn-outline-primary rounded-pill mt-2" onClick={handleAddItem}>Add Item</button>
                            </li>
                        }

                        {
                            currentUser && currentUser.userType === "Admin" &&
                            <li className="nav-item">
                                <button type="button" className="btn btn-outline-primary rounded-pill mt-2">Manage Users</button>
                            </li>
                        }


                        <li className="nav-item">
                            {
                                !user &&
                                <li className="nav-item">
                                    <Link to="login">
                                        <button type="button" className="btn btn-outline-primary rounded-pill px-4 mx-1">Login</button>
                                    </Link>
                                </li>
                            }
                            

                            { 
                                user && user.userType === 'buyer' &&

                                <li className="nav-item dropdown ms-3">
                                    <button className="btn btn-outline-secondary rounded-pill nav-link dropdown-toggle mt-1 border-0" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user-circle fa-2x"></i>
                                    </button>

                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li><Link to="profile" className="dropdown-item" onClick={handleProfile}>Profile</Link></li>
                                        <li><Link to="/additem" className="dropdown-item" onClick={handleAddItem}>Become Leaser</Link></li>
                                        <li><hr className="dropdown-divider"/></li>

                                        <li><Link to="/" className="dropdown-item" onClick={handleLogout}>Logout</Link></li>

                                    </ul>
                                </li>
                            }


                            {  
                                user && user.userType === 'buyer_seller' &&

                                <li className="nav-item dropdown ms-3">
                                    <button className="btn btn-outline-secondary rounded-pill nav-link dropdown-toggle mt-1 border-0" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user-circle fa-2x"></i>
                                    </button>

                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li><Link to="profile" className="dropdown-item" onClick={handleProfile}>Profile</Link></li>
                                        <li><Link to="/additem" className="dropdown-item" onClick={handleAddItem}>Add Item</Link></li>
                                        <li><hr className="dropdown-divider"/></li>

                                        <li><Link to="/" className="dropdown-item" onClick={handleLogout}>Logout</Link></li>

                                    </ul>
                                </li>
                            }
                            
                            {  
                                user && user.userType === 'admin' &&


                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li><Link to="profile" className="dropdown-item">Profile</Link></li>
                                        <li><Link to="admin" className="dropdown-item" >Manage Users</Link></li>
                                        <li><Link to="/additem" className="dropdown-item" onClick={handleAddItem}>Add Item</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link to="/" className="dropdown-item" onClick={handleLogout}>Logout</Link></li>
                                        {/* <li><hr className="dropdown-divider"/></li>
                                        <li><Link to="" className="dropdown-item">Something else here</Link></li> */}
                                    </ul>
                                </li>
                            }
                            

                </div>
            </div>
        </nav>
    )
}

export default Header;