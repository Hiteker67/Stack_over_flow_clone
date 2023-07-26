import React from 'react';
// import * as ReactDOMClient from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk';
import Reducers from './reducers';

const store = createStore( Reducers, compose(applyMiddleware(thunk)) )

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);
// const root = ReactDOMClient.hydrateRoot(container, <App tab="home" />);

// ReactDOM.render(
//   <Provider store = {store}>
//   <StrictMode>
//     <App />
//   </StrictMode>
//   </Provider>,
//   document.getElementById('root'));

  createRoot(document.getElementById('root')).render(<Provider store = {store}>
    <StrictMode>
      <App />
    </StrictMode>
    </Provider>);