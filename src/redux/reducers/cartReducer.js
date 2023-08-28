const cartReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_TO_CART':
        return [...state, action.payload];
      case 'DELETE_TO_CART':
        const productId = action.payload;
        return state.filter(item => item.id !== productId);
      default:
        return state;
    }
  }
  
  export default cartReducer; 