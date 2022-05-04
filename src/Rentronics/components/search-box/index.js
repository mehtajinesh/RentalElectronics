import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCategoryFeaturesIDs, getSearchResults} from "../../actions/search-actions";

const SearchBox = () => {
    const [newSearchValue, updateNewSearchValue] = useState("");
    const activeSearch = useSelector(state => state.activeSearch);
    const availableCategoryData = useSelector(state => state.availableCategoryData);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        getCategoryFeaturesIDs(dispatch)
    }, []);

    const availableCategories = availableCategoryData && Object.keys(availableCategoryData)
    const onSearchValueChange = (event) => {
        updateNewSearchValue(event.target.value);
        dispatch({
            type:'UPDATE_SEARCH_WORD',
            searchWord: event.target.value
        });
    }

    const onUpdateSelectCategory = (event) => {
        const newCategory = event.target.textContent
        const newFeatureFilterIDs = []
        dispatch({
            type:'UPDATE_CATEGORY_FEATURE_FILTERS',newCategory, newFeatureFilterIDs
        });
    }
    console.log(activeSearch)
    return (
        <div className="input-group ps-5 pe-5 pt-4">
            <button className="btn btn-primary dropdown-toggle shadow-none" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">{activeSearch && activeSearch['category']}
            </button>
            <ul className="dropdown-menu">
                {
                    availableCategories && !(Object.keys(availableCategories).length === 0) && availableCategories.map((item) => { return (
                        <li><a className={`dropdown-item ${item === activeSearch['category'] ? 'active' : ''}`} onClick={onUpdateSelectCategory}>{item}</a></li>
                    );
                    })
                }
            </ul>
            <input type="text" placeholder="Search Products" className="shadow-none form-control"
                   aria-label="Search input with category dropdown" defaultValue={activeSearch['searchKeyword']} onChange={onSearchValueChange}/>
            <button className="btn btn-primary rounded ms-2" onClick={() => {
                getSearchResults(dispatch, activeSearch)
                navigate({
                    pathname: '/searchResults',
                    search: `searchKeyword=${activeSearch && activeSearch['searchKeyword']}&category=${activeSearch && activeSearch['category']}`,
                })
            }}> Search</button>
        </div>
    );
};

export default SearchBox;
