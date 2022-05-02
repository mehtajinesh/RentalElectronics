import TrendingProductMultiCarousel from "./trending-product-multi-carousel";

const TrendingItems = ({loading}) => {
    return (
        <div className="d-flex flex-column p-3">
            <div className="d-flex mb-2 ms-3">
                <div>
                    <h1 className="fs-4 my-auto">Treading Items</h1>
                </div>
                <div className="ps-2 my-auto">
                    <i className="fa fa-fire-flame-curved" style={{color: "orange"}}/>
                </div>
            </div>
            <div className="d-flex">
                <TrendingProductMultiCarousel loading={loading}/>
            </div>
        </div>
    );
}
export default TrendingItems