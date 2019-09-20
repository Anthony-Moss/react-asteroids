import { createStore, combineReducers } from 'redux';
import asteroidsReducer from './reducers/asteroidsReducer';
import playerReducer from './reducers/playerReducer';


const rootReducer = combineReducers({
    player: playerReducer,
    asteroids: asteroidsReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store