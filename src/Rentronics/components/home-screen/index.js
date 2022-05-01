import TrendingItems from "./trending-items";
import RecentItems from "./recent-items";
import PopularReviews from "./popular-reviews";
import SearchBox from "../search-box";
import {useDispatch, useSelector} from "react-redux";
import {getHomePageData} from "../../actions/home-screen-actions";
import {useEffect, useState} from "react";

const HomeScreen = () => {
    const loading = useSelector(state => state.loading);
    //TODO: update this once you have profile reducer linked
    // const profile = useSelector(state => state.profile);
    const profile = {"_id": "6268e055edc8db0cc41bf94e"}
    const dispatch = useDispatch();
    const data = profile && {"userID": profile._id}
    useEffect(() => {
        getHomePageData(dispatch, data)
    }, []);
    return (
        <div>
            <SearchBox/>
            <div className="mt-4">
                <TrendingItems loading={loading}/>
                <PopularReviews loading={loading}/>
                {profile && <RecentItems loading={loading}/>}
            </div>
        </div>
    );
}

export default HomeScreen;