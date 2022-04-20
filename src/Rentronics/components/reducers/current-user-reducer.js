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
        default:
            return state;
    }
}

export default currentUserReducer