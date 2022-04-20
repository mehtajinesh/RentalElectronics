import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const loggedIn = useSelector(state => state.loggedIn);
    return (
        <div className="p-2 border-bottom bg-light">
            <div className="d-flex flex-wrap">
                <a href="/"
                   className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none fs-3 text-black me-auto">
                    Rentronics | <span className="fs-6 mt-1 ms-1">Renting out happiness</span>
                </a>
                {!loggedIn && <div className="text-end">
                    <Link to="/login">
                        <button type="button" className="btn btn-primary me-2">Login</button>
                    </Link>
                </div>}
            </div>
        </div>
    )
}

export default Header