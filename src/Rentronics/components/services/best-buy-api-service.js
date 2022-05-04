import axios from "axios"

const API = 'https://api.bestbuy.com/v1/products';
const API_KEY = 'qhqws47nyvgze2mq3qx4jadt';

export const searchProduct = async (search_terms) => {
    let search_query = createSearchQuery(search_terms);

    console.log(search_query);

    const response = await axios.get(API + search_query);
    
    console.log(response.data.products);
    return response.data.products;
}


const createSearchQuery = (search_terms) => {
    let splitTerms;

    console.log(search_terms.category);

    if (search_terms.keywords !== '') {
        splitTerms = search_terms.keywords.split(' ');
        splitTerms.push(search_terms.category);
    } else {
        splitTerms = [];
        splitTerms.push(search_terms.category);
    }

    if (search_terms.keywords === '' && search_terms.category === 'any') {
        splitTerms = ['*'];
    }

    let search_query = "(("; 

    console.log(splitTerms);

    let i = 0;

    while (i < splitTerms.length - 1) {
        search_query += 'search=' + splitTerms[i] + '&';
        i++;
    }
    
    search_query += 'search=' + splitTerms[i] + ")";
    search_query += '&manufacturer=' + search_terms.brand;
    search_query += "&type=HardGood)?apiKey="+ API_KEY +"&show=details.value,images,image,name,modelNumber,regularPrice,sku&format=json"
    
    return search_query;
}