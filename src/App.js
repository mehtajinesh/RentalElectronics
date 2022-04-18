import HomeScreen from "./components/home-screen";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import SearchResults from "./components/search-results";
import searchResultItems from "./../src/components/data/search-results.json"


function App() {
  return (
  <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route index element={<HomeScreen/>}/>
              <Route path="search" exact={true} element={<SearchResults currentCategory={"laptops"} resultItems={searchResultItems}/>}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
);
}

export default App;
