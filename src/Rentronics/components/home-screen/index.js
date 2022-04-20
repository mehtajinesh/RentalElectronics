import TrendingItems from "./trending-items";
import RecentItems from "./recent-items";
import PopularReviews from "./popular-reviews";
import SearchBox from "../search-box";
import {useSelector} from "react-redux";

const HomeScreen = () => {
    const loggedIn = useSelector(state => state.loggedIn);
    return (
        <div>
            <SearchBox/>
            <div className="mt-4">
                <TrendingItems/>
                <PopularReviews/>
                {loggedIn && <RecentItems/>}
            </div>
        </div>
    );
}

export default HomeScreen;