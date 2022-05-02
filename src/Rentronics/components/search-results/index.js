import SearchBox from "../search-box";
import FilterItem from "./filter-item";
import ResultsPage from "./result-page";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {GET_SEARCH_RESULTS, getSearchResults} from "../../actions/search-actions";

const SearchResults = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.activeSearch);
    const searchResults = useSelector(state => state.searchResults);
    const categoryFilters = useSelector(state => state.availableCategoryData);
    const activeCategoryFilters = data && data["activeFeatureFilterIDs"]
    const categoryAllFilters = categoryFilters && categoryFilters[data["category"]]
    console.log(categoryAllFilters)
    console.log(activeCategoryFilters)
    useEffect(() => {
        getSearchResults(dispatch, data)
    }, []);
    return (
        <div>
            <SearchBox/>
            <div className="container-fluid p-3">
                <div className="row pt-4">
                    <div className="col-md-3 rounded">
                        <div className=" d-flex mb-2">
                            <i className="fas fa-filter my-auto"/>
                            <div className="fs-5 my-auto ms-2">Filters</div>
                            <button className="btn btn-outline-secondary ms-auto" onClick={() => {getSearchResults(dispatch, data)
                            }}>Apply</button>
                        </div>
                        {
                            categoryAllFilters.map(filter => <FilterItem filter={filter} checked={activeCategoryFilters.includes(filter)} onChange={(event) => {
                                console.log(event,filter)
                                if(event.target.checked){
                                    //add
                                    dispatch({
                                        type: 'ADD_FILTER', filter
                                    });
                                }
                                else{
                                    //remove
                                    dispatch({
                                        type: 'REMOVE_FILTER', filter
                                    });
                                }
                            }
                            }/>)
                        }
                    </div>
                    <div className="col-md-9 rounded">
                        <ResultsPage items={searchResults}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResults;