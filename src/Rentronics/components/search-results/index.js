import SearchBox from "../search-box";
import availableFilters from "../data/available-filters.json"
import FilterItem from "./filter-item";
import ResultsPage from "./result-page";

const SearchResults = ({currentCategory, resultItems}) => {
    let categoryFilters = availableFilters[currentCategory];
    return (
        <div>
            <SearchBox/>
            <div className="container-fluid">
                <div className="row pt-4">
                    <div className="col-md-3 rounded">
                        <div className=" d-flex mb-2">
                            <i className="fas fa-filter my-auto"/>
                            <div className="fs-5 my-auto ms-2">Filters</div>
                            <button className="btn btn-outline-secondary ms-auto">Apply</button>
                            <button className="btn btn-outline-secondary ms-2">Reset</button>
                        </div>
                        {
                            categoryFilters.map(filter => <FilterItem filter={filter}/>)
                        }
                    </div>
                    <div className="col-md-9 rounded">
                        <ResultsPage items={resultItems}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResults;