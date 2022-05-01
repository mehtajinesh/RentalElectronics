import { useNavigate}  from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as service from '../services/best-buy-api-service.js'
import * as productService from '../services/product-service.js'
import * as featuresService from '../services/features-service.js'

import { useParams } from 'react-router';

import availableFilters from "../data/available-filters.json"
import ResultItem from "./result-item.js";

const EditItem = () => {
  const { pid } = useParams();

  let loggedIn = useSelector(state => state.loggedIn);
  // let currentUser = useSelector(state => state.currentUser);
  // let [currentUser, setCurrentUser] = useState();
  // let listedProducts = useSelector(state => state.listedProducts);
  let [chosenProduct, setChosenProduct] = useState();
  let [productFeatures, setProductFeatures]= useState();

  // const newId = listedProducts.length + 1;

  const [category, setCategory] = useState('Laptops');
  const [productName, setProductName] = useState();
  const [productDescription, setProductDescription] = useState();
  const [brand, setBrand] = useState('');
  // const [brand, setBrand] = useState('');

  const [searchResults, setSearchResults] = useState([]);
  const [fetchingAPI, setFetchAPI] = useState(false);

  const [condition, setCondition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const getItem = async () => {
    try {
      // get product 
      const productToEdit = await productService.findItemById(pid);
      console.log(productToEdit);
      setChosenProduct(productToEdit);
      setProductName(productToEdit.productName);
      setProductDescription(productToEdit.productDescription);

      // get features
      const productFeaturesId = await featuresService.getAllFeaturesIDsForProduct(pid);

      const productFeatures = await Promise.all(productFeaturesId.map(async (featureID) => {
        const feature = await featuresService.getFeatureById(featureID)
        return feature;
      }));

      setProductFeatures(productFeatures);
      setStartDate(productFeatures[0].FeatureValue);
      setEndDate(productFeatures[1].FeatureValue);
      setCondition(productFeatures[4].FeatureValue);

      console.log(productFeatures);

    } catch (e) {
      setChosenProduct();
    }
  }


  useEffect(() => {
    getItem();

    // if (!loggedIn) {
    //     navigate('/login');
    // }
    // else {
    //   getItem();
    // }
    
    }, []);

  

  const calculateRentDuration = () => {
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

  const handleUpdate = async () => {
    let updateProduct = { 
      productName: productName,
      productDescription: productDescription,
      duration: calculateRentDuration()
    }
  
    try {
      const insertedItem = await productService.updateProduct(pid, updateProduct);
      console.log(insertedItem);

      // update the features
      await featuresService.updateFeature(productFeatures[0]._id, {FeatureName: 'startDate', FeatureValue: startDate}); // start date
      await featuresService.updateFeature(productFeatures[1]._id, {FeatureName: 'endDate', FeatureValue: endDate}); // end date
      await featuresService.updateFeature(productFeatures[4]._id, {FeatureName: 'condition', FeatureValue: condition}); // condition

      console.log(productFeatures[0].FeatureValue);

      navigate('/profile')
    }
    catch (e) 
    {
      throw e
    }
  }

  const handleRemove = async () => {

  }

  return (
    <>
      {chosenProduct && productFeatures &&

      <div className="container my-5">
  
        <div className="row">
        
        <div className="col-sm-1 col-md-1 col-lg-2 col-xl-2"></div>
  
        <div className="col-sm-9 col-md-9 col-lg-8 col-xl-8 px-5 py-2"> 
  
        <h3>Edit Item</h3>
      

              <div className="card mb-3 shadow-sm py-4 px-2">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={chosenProduct.productImages[0]['href']} className="img-fluid rounded-start mx-1 my-2" alt="..."/>
                </div>

                <div className="col-md-8">
                    <div className="card-body">    
                        <h5 className="card-title">{chosenProduct.productName}</h5>
                        <p class="card-text">{productFeatures[2].FeatureName}: {productFeatures[2].FeatureValue}</p>
                    </div>
                </div>
              </div>
            </div> 


            <label for="product-detail" className="text-muted mb-1 mt-2">Product Name</label>

            <div className="form-floating mb-3">              
              <div className="col form-floating mb-2">
                  <input type="text" className="form-control" id="product-detail" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} required/>
                  <label for="product-detail">Product Name</label>
              </div>
          </div>


          <label className="text-muted" for="floatingTextarea2">Product Description</label>

          <div className="form-floating mb-2">
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


          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            {/* <button className="btn btn-outline-danger me-md-2 px-5 py-2" onClick={handleRemove} type="button">Remove</button> */}
            <button className="btn btn-primary px-5 py-2" type="button" onClick={handleUpdate}>Update</button>
          </div>
  
        </div>
  
        <div className="col-sm-1 col-md-1 col-lg-2 col-xl-2"> </div>
  
        </div>
      </div>
      }
      </>
  )
}

export default EditItem