import ProductSearch from "../product-search";
import TrendingItems from "../trending-items";
import RecentItems from "../recent-items";

const HomeScreen = () => {
    return (<div>
        <ProductSearch/>
        <TrendingItems/>
        <RecentItems/>
    </div>);
}

export default HomeScreen;