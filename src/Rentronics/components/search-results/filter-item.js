const FilterItem = ({filter, checked, onChange}) => {
    console.log(checked)
    return (
        <div className="form-check">
            <input id={`filter-checkbox-${filter["featureID"]["_id"]}`} checked={checked} className="form-check-input" onChange={onChange} type="checkbox" value={filter["featureID"]["_id"]}/>
            <label className="form-check-label" htmlFor={`filter-checkbox-${filter["featureID"]["_id"]}`}>
                {`${filter["featureID"]["FeatureName"]} - ${filter["featureID"]["FeatureValue"]}`}
            </label>
        </div>
    );
}
export default FilterItem;