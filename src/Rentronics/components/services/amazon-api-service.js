import axios from "axios"
const API = 'https://api.rainforestapi.com/request';

// set up the request parameters
let search_params = {
  api_key: "B2BF5AC13B484E8A80399E05CBCF80E7",
  type: "search",
  amazon_domain: "amazon.com",
  search_term: '',
}

export const getASIN = async (search_term) => {
    search_params.search_term = search_term;
    const params = search_params;
    const response = await axios.get(API, {params});
    return response.data.search_results[0].asin;
}


let product_params = {
    api_key: "B2BF5AC13B484E8A80399E05CBCF80E7",
    type: "product",
    amazon_domain: "amazon.com",
    asin: ""
  }


export const getProductDetail = async (asin) => {
    product_params.asin = asin;
    const params = product_params;
    const response = await axios.get(API, {params});
    return response.data.product;
}
