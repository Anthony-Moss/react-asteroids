import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';


const rootReducer = combineReducers({
    
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store