import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss"


//! Import Redux
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // Permet d'utiliser Redux DevTools
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // on pointe un dossier donc il va donc lire l'index.js dans le dossier reducers

// je creer le store au dessus de mon app
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <React.StrictMode>
        {/* // je donne acces a mon store a toute mon app */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
