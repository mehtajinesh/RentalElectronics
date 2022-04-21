import {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const SearchBox = () => {
    const [newSearchValue, updateNewSearchValue] = useState("");
    const selectedCategory = useSelector(state => state.activeSearch);
    const dispatch = useDispatch();

    const onSearchValueChange = (event) => {
        updateNewSearchValue(event.target.value);
    };
    const onUpdateSelectCategory = (event) => {
        dispatch({
            type:'UPDATE_CATEGORY',
            newCategory: event.target.textContent
        });
    }
    return (
        <div className="input-group ps-5 pe-5 pt-4">
            <button className="btn btn-primary dropdown-toggle shadow-none" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">{selectedCategory}
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={onUpdateSelectCategory}>All</a></li>
                <li><a className="dropdown-item " onClick={onUpdateSelectCategory}>Phones</a></li>
                <li><a className="dropdown-item" onClick={onUpdateSelectCategory}>Laptops</a></li>
                <li><a className="dropdown-item" onClick={onUpdateSelectCategory}>Monitors</a></li>
            </ul>
            <input type="text" placeholder="Search Products" className="shadow-none form-control"
                   aria-label="Search input with category dropdown" onChange={onSearchValueChange}/>
            <Link to="/searchResults" state={{ selectedCategory }} className="text-decoration-none">
            <button className="btn btn-primary rounded ms-2"> Search</button>
            </Link>
        </div>
    );
};

export default SearchBox;
