import axios from "axios"
const API = 'https://api.bestbuy.com/v1/products';


export const searchProduct = async (search_terms) => {
    
    let search_query = createSearchQuery(search_terms);
    console.log(API + search_query);
    const response = await axios.get(API + search_query)
    console.log(response.data.products);
    return response.data.products;
}


const createSearchQuery = (search_terms) => {
    let splitTerms;
    if (search_terms.keywords !== '') {
        splitTerms = search_terms.keywords.split(' ');
        splitTerms.push(search_terms.category);
    } else {
        splitTerms = [];
        splitTerms.push(search_terms.category);
    }
    var search_query = "(("; 

    var i = 0;

    console.log(splitTerms);

    while ( i < splitTerms.length - 1) {
        search_query += 'search=' + splitTerms[i] + '&';
        i++;
    }
    
    search_query += 'search=' + splitTerms[i] + ")";
    search_query += '&manufacturer=' + search_terms.brand;

    search_query += "&type=HardGood)?apiKey=qhqws47nyvgze2mq3qx4jadt&show=details.value,image,name,sku&format=json"
    return search_query;
}