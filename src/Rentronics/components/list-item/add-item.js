import { useNavigate, useLocation}  from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import * as service from '../services/amazon-api-service.js'
import * as service from '../services/best-buy-api-service.js'
import availableFilters from "../data/available-filters.json"
import ResultItem from "./result-item.js";

const AddItem = () => {

  let currentUser = useSelector(state => state.currentUser);
  let listedProducts = useSelector(state => state.listedProducts);
  let chosenProduct = useSelector(state => state.chooseProduct);

  const newId = listedProducts.length + 1;

  const [category, setCategory] = useState('Laptops');
  const [productName, setProductName] = useState('');
  const [brand, setBrand] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  const [useRemoteAPI, setRemoteAPI] = useState(true);
  const [fetchingAPI, setFetchAPI] = useState(false);


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

  const callAPI = async () => {
    let search_terms = {
      brand: brand.toLowerCase(),
      category: category.toLowerCase(),
      keywords: productName.trim().toLowerCase(),
    }
    console.log(search_terms);
    setFetchAPI(true);
    const searchResult = await service.searchProduct(search_terms);
    setSearchResults(searchResult);
  }

  const resetChosenProduct = () => {
    dispatch({
      type: 'RESET_PRODUCT',
    })
    setBrand('');
    setProductName('');
    setSearchResults([])
  }

  const AddItem = () => {
    let newItem = { 
      item_id: newId.toString(), 
      // item_title: brand.concat(" ", productName, " ", modelNumber),
      // item_description: description,
      item_location: currentUser.address,
      item_post_date: new Date(),
      item_seller_name: currentUser.firstName,
      item_price: 3,
      item_rent_duration: CalculateRentDuration(),
      item_properties: {
        category: category,
        product_name: productName,
        brand: brand,
        sku: chosenProduct.sku,
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


    navigate('/profile');
  }

  return (
    
      <div className="container my-5">
  
        <div className="row">
        
        <div className="col-sm-1 col-md-1 col-lg-2 col-xl-2"></div>
  
        <div className="col-sm-9 col-md-9 col-lg-8 col-xl-8 px-5 py-2"> 
  
        <h3>List Your Item to Rent Out</h3>
        {/* <small className="text-muted">Rent out electronics and make extra cash!</small> */}
  
        <form>
    
          <label for="category" className="text-muted mb-1">Step 1 : Seach for Your Product</label>
  
          <div className="form-floating mb-4">
              <select className="form-select" id="floatingSelect" aria-label="Floating label select example" value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option selected>Open this to select category</option>
                <option value="Laptops">Laptops</option>
                <option value="Phones">Phones</option>
                <option value="Monitors">Monitors</option>
              </select>
              <label for="floatingSelect">Product Category</label>

              <div className="form-floating mb-2 mt-2">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example" value={brand} onChange={(e) => setBrand(e.target.value)} required>
                  <option selected>Open this to select category</option>
                  {
                      availableFilters[category].filter((value) => value.label === 'Brand')[0].values.map(
                        brand => { 
                          return (
                            <option value={brand}> {brand} </option>
                          )
                        }
                      )
                  }
                </select>
                  <label for="product-detail">Brand</label>
              </div>

              <div className="col form-floating mb-2">
                  <input type="text" className="form-control" id="product-detail" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} required/>
                  <label for="product-detail">Product Name</label>
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary px-5 py-2" type="button" onClick={callAPI}> Search </button>
              </div>

          </div>

          <div className="search-result">
          <label for="category" className="text-muted mb-1">Step 2 : Find Your Item from Search Results</label>

            {
              fetchingAPI && chosenProduct === null &&
              <>
                    <br/>
                    <div className="border rounded bg-light">

                      {
                        searchResults.length === 0&& 
                        <div className="mx-5 my-5 text-center">
                          <h5>There are no matched results :( ... Try another search query!</h5>
                        </div>
                      }
                      {
                        searchResults.length > 1 &&
                        <ResultItem products={searchResults}/>
                      }
                    </div>
              </>
          }

          </div>
          {
            chosenProduct !== null && 
            <>  
            <div className="card shadow-sm mb-4">
                <div className="row g-0">
                    <label for="category" className="mb-1 px-4 py-2">Item Selected</label>
                    <hr></hr>
                    <div className="col-md-4">
                    <img src={chosenProduct.image} className="img-fluid rounded-start mx-1 my-2" alt="..."/>
                </div>

                <div className="col-md-8">
                    <div className="card-body">    
                        <h5>{chosenProduct.name}</h5>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mx-3">
                      <button className="btn btn-danger px-2 py-2"
                          type="button" 
                          onClick={resetChosenProduct}> 
                          Remove
                      </button>
                    </div>

                </div>

                </div>
            </div> 
            </>
        }
  
            <label for="category" className="text-muted">Step 3 : Lease Details</label>
            <br></br>

            <label for="condition" className="text-muted mb-1 mt-2">Condition</label>

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

  
          </form>

          
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-secondary me-md-2 px-5 py-2" type="button">Save</button>
            <button className="btn btn-primary px-5 py-2" type="button" onClick={AddItem}>Post</button>
          </div>
  
        </div>
  
        <div className="col-sm-1 col-md-1 col-lg-2 col-xl-2"> </div>
  
  
        </div>
      </div>
  )
}

export default AddItem