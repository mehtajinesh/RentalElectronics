import RecentMultiProductCarousel from "./recently-viewed-multi-carousel";

const RecentItems = ({loading}) => {
    return (<div className="d-flex flex-column p-3">
        <div className="d-flex mb-2 ms-3">
            <h1 className="fs-4 my-auto">Recently Viewed Items</h1>
            <div className="ps-2 my-auto">
                <i className="fa-solid fa-eye" style={{color: "black"}}/>
            </div>
        </div>
        <div className="d-flex">
            <RecentMultiProductCarousel loading={loading}/>
        </div>
    </div>);
}

export default RecentItems;