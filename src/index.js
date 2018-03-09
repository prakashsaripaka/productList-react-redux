import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {Provider} from "react-redux";
import Store from './store';
//import registerServiceWorker from './registerServiceWorker';



//window._initialState_ = initialState;

class ReduxedApp  extends React.Component{
    render (){
        return (
            <Provider store={Store}>
                <App></App>
            </Provider>
        )
    }
}

ReactDOM.render(<ReduxedApp />, document.getElementById('root'));
//registerServiceWorker();
