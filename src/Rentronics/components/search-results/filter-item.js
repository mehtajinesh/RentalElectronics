const FilterItem = ({filter, checked}) => {
    console.log(checked)
    return (
        <div className="form-check">
            <input id={`filter-checkbox-${filter["featureID"]["_id"]}`} checked={checked} className="form-check-input" type="checkbox" value={filter["featureID"]["_id"]}/>
            <label className="form-check-label" htmlFor={`filter-checkbox-${filter["featureID"]["_id"]}`}>
                {`${filter["featureID"]["FeatureName"]} - ${filter["featureID"]["FeatureValue"]}`}
            </label>
        </div>
    );
}
export default FilterItem;