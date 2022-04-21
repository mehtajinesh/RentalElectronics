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
    listed_item: []
}


const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return action.currentUser;
        case 'ADD_ITEM_TO_CART':
            state["cart"] = [...state["cart"], action.item]
            return state;
        case 'ADD_ITEM_TO_WISHLIST':
            state["wishlist"] = [...state["wishlist"], action.item]
            return state;
        default:
            return state;
    }
}

export default currentUserReducer