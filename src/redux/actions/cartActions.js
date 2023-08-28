export const addToCart = (item) =>{
    return {
        type : "ADD_TO_CART" , 
        payload: item
    }
}
export const deleteCart = (productId) =>{
    return{
        type : "DELETE_TO_CART",
        payload: productId
    }
}