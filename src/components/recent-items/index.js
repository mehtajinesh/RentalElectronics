import itemDataList from "../data/recently-viewed.json";
import MultiProductCarousel from "../product-multi-carousel";

const RecentItems = () => {
    return (<div className="d-flex flex-column p-5 bg-light">
        <div className="d-flex mb-2">
            <div>
                <h1 className="fs-4 my-auto">Recently Viewed Items</h1>
            </div>
            <div className="ps-2 my-auto">
                <i className="fa-solid fa-eye" style={{color: "black"}}/>
            </div>
        </div>
        <div className="d-flex">
            {/*<div className="row row-cols-1 row-cols-md-3 g-4">*/}
            {/*    {*/}
            {/*        itemDataList.map(itemData => {*/}
            {/*            return (<div className="col">*/}
            {/*                <div className="card h-100">*/}
            {/*                    <img src={itemData.item_primary_image} className="card-img-top p-4"/>*/}
            {/*                    <div className="card-body">*/}
            {/*                        <h5 className="card-title">{itemData.item_title}</h5>*/}
            {/*                        <p className="card-text">{itemData.item_description}</p>*/}
            {/*                    </div>*/}
            {/*                    <div className="card-footer">*/}
            {/*                        <div className="d-flex justify-content-between">*/}
            {/*                            <a className="text-muted my-auto"*/}
            {/*                               href={itemData.item_seller_profile_url}>{itemData.item_seller_name}</a>*/}
            {/*                            <small className="text-muted my-auto">{`Posted: ${itemData.item_post_date}`}</small>*/}
            {/*                            <small*/}
            {/*                                className="text-muted my-auto">{`Location: ${itemData.item_location}`}</small>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>);*/}
            {/*        })}*/}
            {/*</div>*/}
            <MultiProductCarousel items={itemDataList}/>
        </div>
    </div>);
}
export default RecentItems;