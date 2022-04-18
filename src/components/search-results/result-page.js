const ResultsPage = ({items}) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                items.map((item) => {
                    return (
                        <div className="col">
                            <div className="card h-100">
                                <img src={item.item_primary_image} className="card-img-top p-2" alt="product primary image"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.item_title}</h5>
                                    <p className="card-text">{item.item_description}</p>
                                    <p className="card-subtitle">{item.price}</p>
                                    <a href="#" className="btn btn-primary">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ResultsPage;