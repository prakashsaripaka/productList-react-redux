import reducers from './reducers/reducers';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';


const initialState =  {
    "searchString": "",
    "products" : []
};

//const Store = createStore(reducers,  initialState, window.devToolsExtension && window.devToolsExtension(), applyMiddleware(thunk) );
const Store = createStore(reducers,  initialState,  applyMiddleware(thunk) );

export default Store;