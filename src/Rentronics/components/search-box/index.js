import {useState} from "react";

const SearchBox = () => {
    const [newSearchValue, updateNewSearchValue] = useState("");
    const [selectedCategory, updateSelectedCategory] = useState("All");
    const onSearchValueChange = (event) => {
        updateNewSearchValue(event.target.value);
    };
    const onUpdateSelectCategory = (event) => {
        updateSelectedCategory(event.target.textContent)
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
                <li>
                    <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" onClick={onUpdateSelectCategory}>Charger</a></li>
                <li><a className="dropdown-item" onClick={onUpdateSelectCategory}>Cables</a></li>
            </ul>
            <input type="text" placeholder="Search Products" className="shadow-none form-control"
                   aria-label="Search input with category dropdown" onChange={onSearchValueChange}/>
            <button className="btn btn-primary rounded ms-2"> Search</button>
        </div>
    );
};

export default SearchBox;
