import ProductSearch from "../product-search";
import TrendingItems from "../trending-items";
import RecentItems from "../recent-items";
import PopularReviews from "../popular-reviews";

const HomeScreen = () => {
    return (<div>
        <ProductSearch/>
        <TrendingItems/>
        <PopularReviews/>
        <RecentItems/>
    </div>);
}

export default HomeScreen;