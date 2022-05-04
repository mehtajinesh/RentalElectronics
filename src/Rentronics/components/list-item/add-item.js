import { useNavigate }  from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as service from '../services/best-buy-api-service.js'
import * as productService from '../services/product-service.js'
import * as categoryService from "../services/category-service.js"
import * as featureService from "../services/features-service.js"

import availableFilters from "../data/available-filters.json"
import ResultItem from "./result-item.js";

const AddItem = () => {
  let loggedIn = useSelector(state => state.loggedIn);
  let currentUser = useSelector(state => state.currentUser);
  let chosenProduct = useSelector(state => state.chooseProduct);
  let update = useSelector(state => state.updateReducer);

  const [category, setCategory] = useState('Laptops');
  const [categoryId, setCategoryId] = useState();
  const [categoryIdForAll, setCategoryIdForAny] = useState();
  const [categoryBrands, setCategoryBrands] = useState(['Apple', 'Samsung', 'Sony', 'LG']);

  const [productName, setProductName] = useState('');
  const [brand, setBrand] = useState('');
  const [productDescription, setProductDescription] = useState('');
  // const [productImages, setProductImages] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [fetchingAPI, setFetchAPI] = useState(false);

  const [condition, setCondition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateRentDuration = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    return (end - start) / (1000 * 3600 * 24);
  }

  // TODO: category controller needed
  const handleCategory = async () => {
    const categoryData = await categoryService.getCategoryIdByName(category);
    setCategoryId(categoryData[0]._id)

    const categoryIdForAll = await categoryService.getCategoryIdByName('Any');
    setCategoryIdForAny(categoryIdForAll[0]._id)

    // setCategoryBrands(['Apple', 'Samsung', 'Sony', 'LG'])
  }

  useEffect(() => {
    
    if (!loggedIn) 
      navigate('/login');

    else
      handleCategory()}, [category]
    
    ); 
  

  const callAPI = async () => {
    let search_terms = {
      brand: brand.toLowerCase(),
      category: category.toLowerCase(),
      keywords: productName.trim().toLowerCase(),
    }

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

  const addItem = async () => {
    const productImages = chosenProduct.images.map(image => image.href);
    // console.log(productImages);

    let newItem = { 
      productName: productName === '' ? chosenProduct.name : productName,
      productDescription: productDescription,
      duration: calculateRentDuration(),
      location: currentUser.address.city,
      postDate: new Date().toISOString().split('T')[0],
      sellerID: currentUser._id,
      price: 3,
      productImages: productImages,
      totalAvailable: 1,
      totalSold: 0
    }
  
    try {
      // return product id
      console.log(newItem);
      const insertedItem = await productService.addItem(newItem);
      const productId = insertedItem._id;

      const modelNumber = chosenProduct.modelNumber;
      const sku = chosenProduct.sku;

      // add start and end duration just for edit now
      const startDateFeature = await featureService.addFeature({FeatureName: "startDate", FeatureValue: startDate})
      const endDateFeature = await featureService.addFeature({FeatureName: "endDate", FeatureValue: endDate})

      // create features and get all the feature ids
      const feature1 = await featureService.addFeature({FeatureName: "modelNumber", FeatureValue: modelNumber})
      const feature2 = await featureService.addFeature({FeatureName: "sku", FeatureValue: sku})
      const feature3 = await featureService.addFeature({FeatureName: "condition", FeatureValue: condition});

      const featuresId = await Promise.all(chosenProduct.details.map(async (feature) => {
        const insertedFeature = await featureService.addFeature({FeatureName: feature.name, FeatureValue: feature.value})
        return insertedFeature;
      }));

      featuresId.push(feature1);
      featuresId.push(feature2);
      featuresId.push(feature3);
      featuresId.push(startDateFeature);
      featuresId.push(endDateFeature);

      // send product and category
      await categoryService.addProductCategory({productID: productId, categoryID: categoryId})
      await categoryService.addProductCategory({productID: productId, categoryID: categoryIdForAll})

      // send product and features 
      const output = await Promise.all(featuresId.map(async (featureID) => {
        const insertedFeature = await featureService.addProductFeature({productID: productId, featureID: featureID})
        return insertedFeature;
      }));

      update = !update;
      dispatch({
        type: "UPDATE_PROFILE",
        update
      })

      resetChosenProduct();
      navigate('/myitems');
    }
    catch (e) {

    }

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
                {/* <option value="Any" selected>All</option> */}
                <option value="Laptops" selected>Laptops</option>
                <option value="Phones">Phones</option>
                <option value="Monitors">Monitors</option>
              </select>
              <label for="floatingSelect">Product Category</label>

              <div className="form-floating mb-2 mt-2">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example" value={brand} onChange={(e) => setBrand(e.target.value)} required>
                  <option selected>Open this to select category</option>
                  {
                     categoryBrands.map( brand => { 
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
                        searchResults.length >= 1 &&
                        <ResultItem products={searchResults}/>
                      }
                    </div>
              </>
          }
            {
              !fetchingAPI &&
              <>
                    <br/>
                    <div className="border rounded bg-light mb-5">
                      
                        <div className="mx-5 my-5 text-center">
                          <h5> No search results yet..</h5>
                        </div>
                  
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
  
            <label for="category" className="text-muted mb-2">Step 3 : Lease Details</label>
            <br></br>

            <label className="text-muted" for="floatingTextarea2">Product Description</label>

            <div className="form-floating">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{"height": "200px"}} value={productDescription} onChange={(e) => setProductDescription(e.target.value)}></textarea>
            </div>

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
            {/* <button className="btn btn-secondary me-md-2 px-5 py-2" type="button">Save</button> */}
            <button className="btn btn-primary px-5 py-2" type="button" onClick={addItem}>Post</button>
          </div>
  
        </div>
  
        <div className="col-sm-1 col-md-1 col-lg-2 col-xl-2"> </div>
  
  
        </div>
      </div>
  )
}

export default AddItem