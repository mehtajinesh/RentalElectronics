const FilterItem = ({filter}) => {
    return (
        <div className="mt-2 p-2 border border-1 rounded">
            <div className="">
                <h6 className="text-uppercase">{filter.label}</h6>
            </div>
            {
                filter.values.map((value) => {
                    return (
                        <div className="form-check">
                            <input id={`filter-checkbox-${value}`} className="form-check-input" type="checkbox" value={value}/>
                            <label className="form-check-label" htmlFor={`filter-checkbox-${value}`}>
                                {
                                    typeof value === 'number'?
                                    <div>
                                        {
                                            [
                                                ...Array(value),
                                            ].map(() => (
                                                <i className="fa fa-star rating-color" style={{color: "gold"}}/>
                                            ))
                                        }
                                    </div>
                                    :value
                                }
                            </label>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default FilterItem;