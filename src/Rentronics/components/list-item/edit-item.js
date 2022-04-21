import { useNavigate, useParams }  from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditItem = () => {
  const { id } = useParams();
  let item = useSelector(state => state.listedProducts[id - 1]);

  const item_title = item.item_title;
  const item_description = item.item_description;
  const item_location = item.item_location;
  const item_post_date = item.item_post_date;
  const item_seller_name = item.item_seller_name;
  const item_price = item.item_price;

  const item_seller_profile_url = item.item_seller_profile_url;
  const item_primary_image = item.item_primary_image;

  const [category, setCategory] = useState(item.item_properties.category);
  const [productName, setProductName] = useState(item.item_properties.product_name);
  const [brand, setBrand] = useState(item.item_properties.brand);
  const [modelNumber, setModelNumber] = useState(item.item_properties.model_number);
  const [useRemoteAPI, setRemoteAPI] = useState(item.item_properties.useRemoteAPI);
  const [features, setFeatures] = useState(item.item_properties.features);
  const [dimensions, setDimensions] = useState(item.item_properties.dimensions);
  const [description, setDescription] = useState(item.item_properties.description);
  const [condition, setCondition] = useState(item.item_properties.condition);
  const [startDate, setStartDate] = useState(item.item_properties.start_date);
  const [endDate, setEndDate] = useState(item.item_properties.end_date);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const CalculateRentDuration = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    return (end - start) / (1000 * 3600 * 24);
  }


  const UpdateItem = () => {
    let updatedItem = { 
      item_id : id.toString(),
      item_title: item_title,
      item_description: item_description,
      item_location: item_location,
      item_post_date: item_post_date,
      item_seller_name: item_seller_name,
      item_price: item_price,
      item_rent_duration: CalculateRentDuration(),
      item_properties: {
        category: category,
        product_name: productName,
        brand: brand,
        model_number: modelNumber,
        features: features,
        dimensions: dimensions,
        description: description,
        condition: condition,
        start_date: startDate,
        end_date: endDate
      },
      item_seller_profile_url: item_seller_profile_url,
      item_primary_image: item_primary_image
    }

    dispatch({
      type: 'EDIT_ITEM',
      updatedItem
    });

    navigate('/profile');
  }

  const DeleteItem = () => {
    let item_id = id;
    dispatch({
      type: 'DELETE_ITEM',
      item_id
    });

    navigate("/profile");
  }

  return (
    
      <div className="container my-5">
  
        <div className="row">
        
        <div className="col-sm-1 col-md-1 col-lg-2 col-xl-2"></div>
  
        <div className="col-sm-9 col-md-9 col-lg-8 col-xl-8 px-5 py-2"> 
  
        <h3>Edit Item</h3>
        {/* <small className="text-muted">Rent out electronics and make extra cash!</small> */}
  
        <form>
    
          <label for="category" className="text-muted mb-1">Choose Category</label>
  
          <div className="form-floating mb-4">
              <select className="form-select" id="floatingSelect" aria-label="Floating label select example" value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option selected>Open this to select category</option>
                <option value="laptop">Laptop</option>
                <option value="display">Display</option>
                <option value="smart-device">Smart Device</option>
              </select>
              <label for="floatingSelect">Product Category</label>
          </div>

  
          <label for="product-detail" className="text-muted mb-1">Product Detail</label>
  
              <div className="col form-floating mb-2">
                  <input type="text" className="form-control" id="product-detail" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} required/>
                  <label for="product-detail">Product Name</label>
              </div>

              <div className="col form-floating mb-2">
                  <input type="text" className="form-control" id="product-detail" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} required/>
                  <label for="product-detail">Brand</label>
              </div>
  
              <div className="col form-floating mb-3">
                  <input type="text" className="form-control" id="product-detail" placeholder="Model Number" value={modelNumber} onChange={(e) => setModelNumber(e.target.value)} required/>
                  <label for="product-detail">Model Number</label>
              </div>
  
              <div className="form-check">

                <input className="form-check-input" type="checkbox" id="flexCheckChecked" value={useRemoteAPI} onChange={(e) => setRemoteAPI(e.target.value)}/>
                <small className="form-check-label text-muted" for="flexCheckChecked">
                  Use Product Detail from Amazon
                </small>
              </div>
  
              <div className="col form-floating mb-2">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "5em"}} value={features} onChange={(e) => setFeatures(e.target.value)}></textarea>
                <label for="product-detail">Features</label>
              </div>
  
              <div className="col form-floating mb-2">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "5em"}} value={dimensions} onChange={(e) => setDimensions(e.target.value)}></textarea>
                <label for="product-detail">Dimensions</label>
              </div>
  
              <div className="col form-floating mb-4">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "10em"}} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <label for="product-detail">Description</label>
              </div>
  
  
            <label for="condition" className="text-muted mb-1">Condition</label>

            <div className="form-floating mb-4">
              <select className="form-select" id="floatingSelect" aria-label="Floating label select example" value={condition} onChange={(e) => setCondition(e.target.value)}>
                <option selected>Open this to select condition</option>
                <option value="medicore">Medicore</option>
                <option value="good">Good</option>
                <option value="very-good">Very Good</option>
                <option value="brand-new">Brand New</option>
              </select>
              <label for="floatingSelect">Product Condition</label>
            </div>
  

            <div>
              <label for="rent_duration" className="text-muted">Lease Available Dates</label>
              
              <div className="row mb-4">
                <div className="col">
                  <label for="startDate" className="text-muted mb-1">Start Date</label>
                  <input type="date" className="form-control" id="startDate" placeholder="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required/> 
                </div>

                <div className="col">
                  <label for="endDate" className="text-muted mb-1">End Date</label>
                  <input type="date" className="form-control" id="endDate" placeholder="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required/>
                </div>
          </div>

        </div>

          <div className="mb-3">
            <label for="formFileMultiple" className="form-label text-muted">Upload Product Photos</label>
            <input className="form-control" type="file" id="formFileMultiple" multiple/>
          </div>
  
          </form>
          
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-secondary me-md-2 px-5 py-2" type="button" onClick={DeleteItem}>Remove</button>
            <button className="btn btn-primary px-5 py-2" type="button" onClick={UpdateItem}>Update</button>
          </div>
  
        </div>
  
        <div className="col-sm-1 col-md-1 col-lg-2 col-xl-2"> </div>
  
  
        </div>
      </div>
  )
}

export default EditItem