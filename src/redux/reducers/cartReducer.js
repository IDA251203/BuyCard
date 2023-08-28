const cartReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_TO_CART':
        return [...state, action.payload];
      case 'DELETE_TO_CART':
        return {
          ...state,
          cart: state.filter(item => item.id !== action.payload)
        };
      default:
        return state;
    }
  }
  
  export default cartReducer; 