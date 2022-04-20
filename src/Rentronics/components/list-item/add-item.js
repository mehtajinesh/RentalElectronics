import { useNavigate}  from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddItem = () => {
  
  let currentUser = useSelector(state => state.currentUser);
  let listedProducts = useSelector(state => state.listedProducts);
  const newId = listedProducts.length + 1;

  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [brand, setBrand] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  const [useRemoteAPI, setRemoteAPI] = useState(false);
  const [features, setFeatures] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CalculateRentDuration = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    return (end - start) / (1000 * 3600 * 24);
  }

  const AddItem = () => {
    let newItem = { 
      item_id: newId.toString(), 
      item_title: brand.concat(" ", productName, " ", modelNumber),
      item_description: description,
      item_location: currentUser.address,
      item_post_date: new Date(),
      item_seller_name: currentUser.firstName,
      item_price: 3,
      item_rent_duration: CalculateRentDuration(),
      item_properties: {
        category: category,
        product_name: productName,
        brand: brand,
        model_number: modelNumber,
        useRemoteAPI: useRemoteAPI,
        features: features,
        dimensions: dimensions,
        description: description,
        condition: condition,
        start_date: startDate,
        end_date: endDate
      },
      item_seller_profile_url: "https://jineshmehta.com",
      item_primary_image: "https://shorturl.at/bA023"
    }

    dispatch({
      type: 'ADD_ITEM',
      newItem
    });


    // if (currentUser.userType === 'buyer') {
    //   let updateUserRole = 'buyer_seller';

    //   dispatch({
    //     type: 'UPDATE_USER',
    //     updateUserRole
    //   })
    // }


    // TODO: go to product detail page
    navigate('/product');
  }

  return (
    
      <div className="container my-5">
  
        <div className="row">
        
        <div className="col-sm-1 col-md-1 col-lg-2 col-xl-2"></div>
  
        <div className="col-sm-9 col-md-9 col-lg-8 col-xl-8 px-5 py-2"> 
  
        <h3>Add Item</h3>
        {/* <small className="text-muted">Rent out electronics and make extra cash!</small> */}
  
        <form>
    
          <label for="category" className="text-muted mb-1">Choose Category</label>
  
          <div class="form-floating mb-4">
              <select class="form-select" id="floatingSelect" aria-label="Floating label select example" value={category} onChange={(e) => setCategory(e.target.value)} required>
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
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "5em"}} value={features} onChange={(e) => setFeatures(e.target.value)}></textarea>
                <label for="product-detail">Features</label>
              </div>
  
              <div className="col form-floating mb-2">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "5em"}} value={dimensions} onChange={(e) => setDimensions(e.target.value)}></textarea>
                <label for="product-detail">Dimensions</label>
              </div>
  
              <div className="col form-floating mb-4">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "10em"}} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <label for="product-detail">Description</label>
              </div>
  
  
            <label for="condition" className="text-muted mb-1">Condition</label>

            <div class="form-floating mb-4">
              <select class="form-select" id="floatingSelect" aria-label="Floating label select example" value={condition} onChange={(e) => setCondition(e.target.value)}>
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
              
              <div class="row mb-4">
                <div class="col">
                  <label for="startDate" className="text-muted mb-1">Start Date</label>
                  <input type="date" className="form-control" id="startDate" placeholder="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required/> 
                </div>

                <div class="col">
                  <label for="endDate" className="text-muted mb-1">End Date</label>
                  <input type="date" className="form-control" id="endDate" placeholder="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required/>
                </div>
          </div>

        </div>

          <div className="mb-3">
            <label for="formFileMultiple" className="form-label text-muted">Upload Product Photos</label>
            <input class="form-control" type="file" id="formFileMultiple" multiple/>
          </div>
  
          </form>
          
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-secondary me-md-2 px-5 py-2" type="button">Save</button>
            <button class="btn btn-primary px-5 py-2" type="button" onClick={AddItem}>Post</button>
          </div>
  
        </div>
  
        <div className="col-sm-1 col-md-1 col-lg-2 col-xl-2"> </div>
  
  
        </div>
      </div>
  )
}

export default AddItem