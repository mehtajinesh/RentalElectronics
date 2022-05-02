import TrendingItems from "./trending-items";
import RecentItems from "./recent-items";
import PopularReviews from "./popular-reviews";
import SearchBox from "../search-box";
import {useDispatch, useSelector} from "react-redux";
import {getHomePageData} from "../../actions/home-screen-actions";
import {useEffect} from "react";

const HomeScreen = () => {
    const loading = useSelector(state => state.loading);
    // const profile = useSelector(state => state.profile);
    // const profile = {"_id": "6268e055edc8db0cc41bf94e"}
    let currentUser = useSelector(state => state.currentUser);

    // const profile = useSelector(state => state.profile);
    const userID = currentUser && currentUser._id
    const dispatch = useDispatch();
    const data = currentUser && {"userID": currentUser._id}
    useEffect(() => {
        getHomePageData(dispatch, data)
    }, []);
    return (
        <div>
            <SearchBox/>
            <div className="mt-4">
                <TrendingItems loading={loading}/>
                <PopularReviews loading={loading}/>
                {currentUser && <RecentItems loading={loading}/>}
            </div>
        </div>
    );
}

export default HomeScreen;