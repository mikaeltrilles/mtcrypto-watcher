import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss"


//! Redux
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//     <App />

// );

const store = createStore( // je creer le store au dessus de mon app
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
