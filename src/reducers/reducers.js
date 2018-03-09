let initialState = {
    products: [],
    searchString: "",
    sortBy : "A-Z"
};

const ProductListReducer = (state = initialState , action) => {
    switch (action.type){
        case "SEARCH":
            return Object.assign({}, state, {searchString : action.data});
        case "UPDATE_PRODUCT_LIST":

            return Object.assign({}, state, action.data);

        case "SORT":

            return Object.assign({}, state, {sortBy : action.data});
        //case "LOAD_PRODUCTS_INFORMATION":
          //  return {}

        default:
            return state ;
    }
};

export default ProductListReducer;
