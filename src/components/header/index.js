import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import LoginContext from '../../context/loginContext';

const Header = () => {
    const [isLoggedin, setLoginStatus] = useContext(LoginContext);

    const handleLogout = () => {
        setLoginStatus(false);
    }
    
  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light border-bottom bg-white sticky-top py-3" >
            <Link to="" style={{ textDecoration: 'none' }}>
                <div className="navbar-brand px-5" href="#">Rentronics</div>
            </Link>

            <div class="collapse navbar-collapse justify-content-end " id="navbarCollapse">
                <ul class="navbar-nav mx-5">

                    <Link to="" style={{ textDecoration: 'none', color: "black" }}>
                        <li class="nav-item mt-1 mx-3">
                            <i class="fas fa-shopping-cart mx-1"> </i>    
                            Cart            
                        </li>
                    </Link>

                    <Link to="" style={{ textDecoration: 'none', color: "lightgrey"}}>
                        <li class="nav-item">
                            <i class="fas fa-user-circle fa-2x"></i>
                        </li>
                    </Link>

                    <Link to="">
                        <li class="nav-item mx-4">
                            {
                                isLoggedin && <button type="button" class="btn btn-outline-primary rounded-pill px-4" onClick={handleLogout}>Logout</button>
                            }

                            {
                                !isLoggedin && <Link to="../login"><button type="button" class="btn btn-outline-primary rounded-pill px-4">Login</button></Link>
                            }
                            
                        </li>

                    </Link>

                </ul>
            </div>
        </nav>
      </>

  )
}

export default Header