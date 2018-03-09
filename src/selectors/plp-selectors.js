import { createSelector } from 'reselect';

const getSearchString = (state) => {
    return state.searchString;
};

const getProductsList = (state) => {
    return state.products;
};

const searchSelector = createSelector(
    [ getSearchString, getProductsList], ( searchString, productsList) => {
        if(searchString !== ""){
            return productsList.filter((item) => { return (item.name.toLowerCase().indexOf(searchString.toLowerCase()) >= 0); })
        }
        return productsList;
    }
);

export default searchSelector;