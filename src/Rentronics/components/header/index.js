import bootstrap from 'bootstrap'  // this is need for toggle down menu for profile

import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
    let loggedIn = useSelector(state => state.loggedIn);
    let currentUser = useSelector(state => state.currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = (event) => {

        loggedIn = !loggedIn;

        dispatch({
            type:'UPDATE_LOGIN_STATE',
            loggedIn
        });

        //navigate the user to home page
        navigate('/home');
    }

    const handleCart = (event) => {

        // TODO: need to update route name for cart
        if (loggedIn) {
            navigate('/cart');
        }
        else{
            navigate('/login');
        } 

    }

    const handleAddItem = (event) => {
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
                    
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            {
                                loggedIn && currentUser.userType === "buyer_seller" &&
                                <li className="nav-item">
                                    <button type="button" className="btn btn-outline-primary rounded-pill mt-2" onClick={handleAddItem}>Add Item</button>
                                </li>
                            }  

                            <li className="nav-item">     
                                {
                                    !loggedIn &&
                                    <button type="button" className="btn rounded-pill" onClick={handleCart}>
                                        <i class="fas fa-shopping-cart"></i> Cart   
                                    </button>
                                }
                                {
                                    // I had to do this to match the margins
                                    loggedIn &&
                                    <button type="button" className="btn rounded-pill mt-2" onClick={handleCart}>
                                        <i class="fas fa-shopping-cart"></i> Cart   
                                    </button>
                                }

                            </li>


                            {
                                !loggedIn &&
                                <li className="nav-item">
                                    <Link to="login">
                                        <button type="button" className="btn btn-outline-primary rounded-pill px-4 mx-1">Login</button>
                                    </Link>
                                </li>
                            }

                            { 
                                loggedIn &&

                                <li class="nav-item dropdown ms-3">
                                    <button className="btn btn-outline-secondary rounded-pill nav-link dropdown-toggle mt-1 border-0" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
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
    )
}

export default Header