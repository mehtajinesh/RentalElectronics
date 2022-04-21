const initialState = {
    _id: '',
    email: '',
    firstName: '',
    lastName: '',    
    userType: '',
    DOB:'',
    phoneNumber: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: ''
    },
    reviews: [],
    listed_item: [],
    cart: [],
    wishlist: []
}


const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return action.currentUser;
        case 'ADD_ITEM_TO_CART':
            return {...state, "cart" : [...state["cart"], action.item] };
        case 'REMOVE_ITEM_FROM_CART':
            return {...state, "cart" : state["cart"].filter(item => item.item_id !== action.item.item_id) };
        case 'ADD_ITEM_TO_WISHLIST':
            return {...state, "wishlist" : [...state["wishlist"], action.item] };
        default:
            return state;
    }
}

export default currentUserReducer